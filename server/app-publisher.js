//Step 1 - Get the directory where app needs to be created/updated

const fs = require("fs");
const path = require("path");
const walk = require('walk');
var copy = require('recursive-copy');

const srsteeConstants = require('./srstee-constants');

//Validations
if (!process.argv || process.argv.length < 4) {
  console.log("Invalid usage of the command. \nCorrect format : npm run app-pub [application-name] [application directory");
}

const applicationName = process.argv[2];
const targetDirectory = process.argv[3];

if (!fs.existsSync(targetDirectory)) {
  console.log('Invalid target directory!')
}


//Step 2 - Bundle only the app related artifacts into bundle-<appcode>.js
//TODO

//Step 3 - Update the app related artifacts + bundle into the directory from Step#1

const filePatterns = [  
  new RegExp('.*client/script/' + applicationName + '/.*'),
  new RegExp('.*client/template/' + applicationName + '/.*'),
  new RegExp('.*client/view/' + applicationName + '/.*'),
  new RegExp('.*client/widget/global/' + applicationName + '/.*'),  
  new RegExp('.*common/resource/' + applicationName + '/.*'),
  new RegExp('.*common/script/' + applicationName + '/.*'),
  new RegExp('.*common/scope/' + applicationName + '.js'),
  new RegExp('.*common/style/' + applicationName + '/*'),    
  new RegExp('.*component/' + applicationName + '/.*'),
  new RegExp('.*server/hook/' + applicationName + '/.*'),
  new RegExp('.*server/script/' + applicationName + '/.*'),
  new RegExp('.*server/localsync/' + applicationName + '/.*'),  
  new RegExp('.*server/model/' + applicationName + '/.*'),
  new RegExp('.*server/query/' + applicationName + '/.*'),
  new RegExp('.*server/routes/' + applicationName + '/.*'),
  new RegExp('.*server/navigation/' + applicationName + '/.*'),
  new RegExp('.*client/bundles/' + applicationName + '_bundle.min.js'),
  new RegExp('.*palette/' + applicationName + '/.*')  
];

var appPub = new AppPublisher();
appPub.process(applicationName, targetDirectory);

function AppPublisher() {

  this.excludeList = [],
    this.applicationFiles = [],
    this.bundleFile = null,

    this.process = (applicationName, targetDirectory) => {
      //Array of all the files related to given application
      this.getApplicationFiles(applicationName)
      .then((applicationFiles) => {       
        this.copyApplication2Target(applicationFiles, targetDirectory);        
      });      
    }

  this.getApplicationFiles = function (applicationName) {
    var applicationFiles = [];
    return new Promise((resolve, reject) => {
      // Walker options
      var options = {
        followLinks: false
        // directories with these keys will be skipped
        , filters: ["jspm_packages", "node_modules", "jspm.config.js", "srstee-config.json", "build.js", "build.js.map"]
      };

      var walker = walk.walk(srsteeConstants.srsteeRoot, options);
      var self = this;
      walker.on('file', function (root, stat, next) {
        // Add this file to the list of files
        filePatterns.find((filePattern) => {
          let fileName = root + "/" + stat.name;
          if (filePattern.test(fileName) == true) {
            applicationFiles.push(fileName);
            return true;
          }
        });

        next();
      });

      walker.on('end', function () {        
        resolve(applicationFiles);
      });
    });    
  }

  this.copyApplication2Target = function (applicationFiles, targetDirectory) {    
    applicationFiles.forEach((applicationFile) => {      
      let targetFileName = applicationFile + "";
      
      if(targetFileName.startsWith(srsteeConstants.srsteeRoot)) {        
        targetFileName = targetFileName.slice(srsteeConstants.srsteeRoot.length);              
      }
      targetFileName = targetDirectory + targetFileName;          
      copy(applicationFile, targetFileName, {overwrite: true}, function(error, results) {
        if (error) {
            console.error('Copy failed: ' + error);
        } 
      });      
    }); 
    console.log('Application published!!!')
  }
}