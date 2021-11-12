var fs = require("fs");
var walk = require('walk');
const path = require('path');
const srsteeConstants = require('./srstee-constants');
var basePath = "client/";
var componentPath = basePath + "component";
const buildFilePath = basePath + "build.js";
const buildMapFilePath = basePath + "build.js.map";
var Socket = require('simple-websocket');
var shell = require('shelljs');
const fileName = 'client/srstee-config.json';
var files = [];
var filesUploaded = 0;
var hostName = srsteeConstants.srsteeEndPoint;
var JavaScriptObfuscator = require('javascript-obfuscator');
var accessToken = "";
let configFileData = fs.readFileSync('./server/config.json', 'utf-8');
let configJSON = JSON.parse(configFileData);
let totalFiles2Upload = 2;
if(process.argv.length < 3) {
    console.log("Invalid usage of the command. \nCorrect format : npm run pack [application-name]");
    process.exit(0);
}

if(process.argv.length == 4) {
  hostName = "ws://localhost:" + process.argv[3];
}

if(process.argv.length == 5) {
    hostName = "ws://" + process.argv[3] + ":"  + process.argv[4];
}

  
var socket = new Socket(hostName);

const appName = process.argv[2];
const distBundleFilePath = appName ==  "all"? basePath + "bundles/*.js" : basePath + "bundles/" + appName + "_bundle.js";

var postBundler = new PostBundler();
postBundler.process();

function PostBundler() {
    this.process = function(){        
        // this.copy2Dist();
        this.removeCommonScriptReferences();
        // this.removeComponentTemplateScriptReferences();
        this.sendBundle2Srstee();
    }

    this.verifyAuthentication = function() {
        //Authenticate with the superuser and get access token     
        let credentialsJSON = {username: configJSON.username, password: configJSON.password};
        console.log("Authorizing integration user - " + configJSON.username);
        socket.send(JSON.stringify({payload: srsteeConstants.getAccessToken+ '-' + JSON.stringify(credentialsJSON)}));
    }

    this.removeComponentTemplateScriptReferences = function() {
        this.walker = walk.walk(componentPath, {
            followLinks: false
        });

        this.walker.on('file', function (root, stat, next) {
            // Add this file to the list of files
            if (stat.name.endsWith("Definition.js")) {
                var filePath = root + ".js";
                fs.exists(filePath, function(exists) {
                    if(exists) {
                      fs.unlinkSync(filePath);
                    }
                  });
            }
            next();
        });
    }

    this.copy2Dist = function() {
        fs.copyFile(buildFilePath, distBundleFilePath, (err) => {
            if (err) throw err;
        });
        // fs.copyFile(buildMapFilePath, distBundleMapFilePath, (err) => {
        //     if (err) throw err;
        // });
    }

    this.sendBundle2Srstee = function() {
        socket.on('connect', this.verifyAuthentication);
        socket.on('data', this.server2ClientAck);
        socket.on('close', () => {
            console.log('Completed successfully!');
        });
    }
    
    this.removeCommonScriptReferences = function() {
        var self = this;
        this.getExistingSrsteeConfig()
        .then(function(data){
            if(data.excludes && Object.keys(data.excludes).length > 0) {
                let files2Delete = Object.keys(data.excludes);
                files2Delete.forEach(function(file2Delete, indx) {
                    fs.access(file2Delete, error => {
                        if (!error) {
                            fs.unlinkSync(file2Delete);
                        } else {
                            //console.log(error);
                        }
                    });
                });
                self.clearSrsteeConfigEntries();
            }
        });
    }

    this.clearSrsteeConfigEntries = function() {
        fs.writeFile(fileName, JSON.stringify({}, null, 2), function (err) {
            if (err) {
              console.log(err);
              throw err;
            }
          });
    }

    this.getExistingSrsteeConfig = function() {
        return new Promise((resolve, reject) => {
            if (fs.existsSync(fileName)) {
                fs.readFile(fileName, (err, data) => {
                    if (err) throw err;
                    let outputContent = {};
                    try {
                        outputContent = JSON.parse(data);
                    }catch(err) {
                        console.log(err);
                    }
                    resolve(outputContent);
                });
            }else{
                resolve({});
            }
        });
    }

    this.server2ClientAck = function (data) {
        if(!data) return;
        var dataJSON = JSON.parse(data);
        if(dataJSON) {
            switch(dataJSON.type) {
                case srsteeConstants.getAccessToken:                      
                    console.log('Authenticated successfully... initiating the push request');  
                    accessToken = dataJSON.payload;  
                    var bundleFiles = fs.readdirSync(basePath + "bundles/")
                                        .filter(fn => appName == "all"? fn.endsWith('_bundle.min.js'): fn.endsWith(appName + '_bundle.min.js'));                      
                    totalFiles2Upload = bundleFiles.length;
                    if(bundleFiles && bundleFiles.length > 0) {
                        bundleFiles.map((bundleFilePath, indx)=>{                                                   
                            fs.readFile(path.join(basePath + "bundles/" + bundleFilePath), 'utf8', function (err, bundleFile) {
                                if (err) {
                                    //File not found error...
                                    if (err.errno == -2) {
                                        console.error('No Bundle.js script found to update...');
                                    }
                                }else {
                                    let bundleName = (appName == "all" && bundleFilePath.indexOf("_bundle.min.js") > -1)? bundleFilePath.split("_bundle.min.js")[0]: appName;
                                    socket.send(JSON.stringify({payload: srsteeConstants.request2Server2UpdateBundle + bundleName + srsteeConstants.Delimiter + bundleFile, accessToken}));                                    
                                }
                            });
                        })                        
                    }else {
                        console.log("No bundle files found.")
                        socket.destroy();
                    }                  
                    break;        
                case srsteeConstants.authFailed:
                    console.error('Authenticated failed... Try again!');
                    socket.destroy();
                    break;  
                case "bundle": 
                case "bundlemap":
                    filesUploaded++;
                    if(filesUploaded == totalFiles2Upload) 
                        socket.destroy();
                    break;                                                
            }
        }        
    }
}
