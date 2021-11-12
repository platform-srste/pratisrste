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
let appLookup = applicationName; 
let  bundleLookup  = applicationName + "_bundle.min.js"
if (!fs.existsSync(targetDirectory)) {
  console.log('Invalid target directory!')
}
if(applicationName == "all") {
  appLookup = ".*";
  bundleLookup = ".*";
}


const filePatterns = [
  new RegExp('.*bundles/' + bundleLookup),
  new RegExp('.*client/script/' + appLookup + '/.*'),
  new RegExp('.*client/template/' + appLookup + '/.*'),
  new RegExp('.*client/view/' + appLookup + '/.*'),
  new RegExp('.*client/widget/global/' + appLookup + '/.*'),  
  new RegExp('.*common/resource/' + appLookup + '/.*'),
  new RegExp('.*common/script/' + appLookup + '/.*'),
  new RegExp('.*common/scope/' + appLookup + '.js'),
  new RegExp('.*common/style/' + appLookup + '/*'),    
  new RegExp('.*component/' + appLookup + '/.*'),
  new RegExp('.*server/hook/' + appLookup + '/.*'),
  new RegExp('.*server/localsync/' + appLookup + '/.*'),
  new RegExp('.*server/script/' + appLookup + '/.*'),
  new RegExp('.*server/model/' + appLookup + '/.*'),
  new RegExp('.*server/query/' + appLookup + '/.*'),
  new RegExp('.*server/routes/' + appLookup + '/.*'),
  new RegExp('.*server/navigation/' + appLookup + '/.*'),
  new RegExp('.*palette/' + appLookup + '/.*')
];

//Step 2 - Bundle only the app related artifacts into bundle-<appcode>.js
//TODO

//Step 3 - Update the app related artifacts + bundle into the directory from Step#1


var appReset = new AppResetter();
appReset.process(applicationName, targetDirectory);

function AppResetter() {

    this.process = (applicationName, targetDirectory) => {
      //Array of all the files related to given application
      this.getApplicationFiles(targetDirectory)
      .then((applicationFiles) => {       
        this.resetApplicationFiles(applicationFiles, targetDirectory);
      });          
    }

  this.getApplicationFiles = function (targetDirectory) {
    var applicationFiles = [];
    return new Promise((resolve, reject) => {
      // Walker options
      var options = {
        followLinks: false
        // directories with these keys will be skipped
        , filters: ["jspm_packages", "node_modules", "jspm.config.js", "srstee-config.json", "build.js", "build.js.map"]
      };

      var walker = walk.walk(targetDirectory, options);
      var self = this;
      walker.on('file', function (root, stat, next) {
        // Add this file to the list of files
        filePatterns.find((filePattern) => {
          let fileName = path.normalize(path.join(root, stat.name));
          if (filePattern.test(fileName) === true) {            
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

  this.resetApplicationFiles = function (applicationFiles, targetDirectory) {        
    applicationFiles.forEach((applicationFile) => {      
      let targetFileName = applicationFile + "";
      
      if(targetFileName.startsWith(targetDirectory)) {   
        targetFileName = targetFileName.slice(targetDirectory.length);     
        targetFileName = path.join(srsteeConstants.srsteeRoot, targetFileName);
      }

      copy(applicationFile, targetFileName, {overwrite: true}, function(error, results) {
        if (error) {
            console.error('Copy failed: ' + error);
        } 
      });
    });
    console.log('Application files have been reset succuessfully');
    
  }
}