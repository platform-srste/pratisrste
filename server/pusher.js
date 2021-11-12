var fs = require("fs");
var walk    = require('walk');
var Socket = require('simple-websocket');
var hostname = "localhost:2222";
var path = require("path");

const srsteeConstants = require('./srstee-constants');
if(process.argv.length == 3) {
  hostname = "localhost:" + process.argv[2];
}
if(process.argv.length == 4) {
  hostname = process.argv[2] + ":" + process.argv[3];
}
var accessToken = "";
var socket = new Socket('ws://' + hostname);
console.log('hostname = ' + hostname)
var files   = [];

let configFileData = fs.readFileSync(path.normalize('./server/config.json'), 'utf-8');
let configJSON = JSON.parse(configFileData);


/*
  Step#1 - client sends the configuration file
  Step#2 - server sends the acknowledgement back
  Step#3 - client send the rest of the files data to the server
  Step#4 - server sends the ack back
  Step#5 - Transfer success!
*/
socket.on('connect', function () {
  //Authenticate with the superuser and get access token     
  let credentialsJSON = {username: configJSON.username, password: configJSON.password};
  console.log("Authorizing integration user - " + configJSON.username);
  socket.send(JSON.stringify({payload: srsteeConstants.getAccessToken+ '-' + JSON.stringify(credentialsJSON), accessToken}));
})

socket.on('close', function () {
  console.log('Completed successfully!');
});

socket.on('data', function (data) {
  if(!data) return;
  var dataJSON = JSON.parse(data);
  if(dataJSON) {
    switch(dataJSON.type) {
      case srsteeConstants.getAccessToken:        
        console.log('Authenticated successfully... initiating the push request');
        accessToken = dataJSON.payload;
        prepareFileList();
        break;        
      case srsteeConstants.authFailed:
        console.error('Authenticated failed... Try again!');
        socket.destroy();
        break;   
      case srsteeConstants.request2Client2SendFilesHeader:                        
        createPayload(files)
        .then(function(restOfPayload2Send) {
          socket.send(JSON.stringify({payload: srsteeConstants.syncDataRequestHeader + JSON.stringify(restOfPayload2Send), accessToken}));
        })
        .catch(function(err) {
          console.log("Error occurred while processing the config sync files - " + err);
          socket.destroy();
        })
        break;
      case srsteeConstants.syncCompletedResponseHeader: 
        socket.destroy();
        break;
      case srsteeConstants.pushStatusHeader:
        process.stdout.clearLine();
        process.stdout.cursorTo(0);        
        let totalItems = dataJSON.payload.total;
        let processed =  dataJSON.payload.processed;
        let percentageComplete =  parseInt(processed/totalItems * 100);
        process.stdout.write(percentageComplete + "% Completed (" + processed + "/" + totalItems + ")");
        break;
    }
  }  
});

function prepareFileList() {
  // Walker options
  var options = {
    followLinks: false
    // directories with these keys will be skipped
    , filters: ["jspm_packages", "node_modules"]
  };  
  var walker  = walk.walk(srsteeConstants.srsteeRoot, options);

  walker.on('file', function(root, stat, next) {
      // Add this file to the list of files
      files.push(path.join(root, stat.name));
      next();
  });

  walker.on('end', function() {       
    createSyncPropsPayload(files)
    .then(function(payload2sendArry){      
      if(payload2sendArry) {
        socket.send(JSON.stringify({payload: srsteeConstants.syncConfigRequestHeader + JSON.stringify(payload2sendArry), accessToken}));
      }else{
        createPayload(files)
        .then(function(restOfPayload2Send) {
          socket.send(JSON.stringify({payload: srsteeConstants.syncDataRequestHeader + JSON.stringify(restOfPayload2Send), accessToken}));
        })
        .catch(function(err) {
          console.log('Error occurred while sending the data files... ' + err);
        });
      }
    })
    .catch(function(err) {
      console.log(err);
    });
  });
}

function getSyncPropsFiles(files) {
  var result = [];
  files.forEach(function(filePath) {
    if(filePath.startsWith(path.join(srsteeConstants.srsteeRoot,  'server', 'localsync'))) {
      result.push(filePath);
    }
  })  
  return result;
}

function getFilesExcludingSyncProps(files) {
  let resultFiles = files.filter((filePath)=> {    
    return filePath.indexOf(path.join('server', 'localsync')) == -1;
  });  
  return resultFiles;
}

function createSyncPropsPayload(files) {  
  var syncPropFilesPath = getSyncPropsFiles(files);  
  return new Promise((resolve, reject) => {
    try{
      var fileObjArry = [];
      syncPropFilesPath.map((syncPropFilePath)=>  {
        let outputFilePath = syncPropFilePath.split(srsteeConstants.srsteeRoot);
        let fileObj = {};
        if(outputFilePath && outputFilePath.length > 1) {
          outputFilePath = outputFilePath[1]
          fileObj['path'] = outputFilePath;        
          fs.readFile(syncPropFilePath, 'utf8', function(err, data) {
            if(err) {
              console.log(err);
              this.reject('Something went wrong while reading the file - ' + syncPropFilePath);
            }else{
              fileObj['payload'] = data;
              fileObjArry.push(fileObj);              
              if(fileObjArry.length == syncPropFilesPath.length) {                
                this.$topResolve(fileObjArry);
              }              
            }
          }.bind({$topResolve: resolve, $topReject: reject}));
        }else{
          resolve();
        }
      })      
    }catch(ex) {
      reject();
    }
  });
}

function createPayload(files) {
  var filesExcludingSyncProps = getFilesExcludingSyncProps(files);  
  return new Promise((resolve, reject) => {
    try {
      var result = [];
      var files2Process = filesExcludingSyncProps.length - 1;
      filesExcludingSyncProps.forEach(function(filePath) {
        var fileObj = {};
        var outputFilePath = filePath.split(srsteeConstants.srsteeRoot);
        if(outputFilePath && outputFilePath.length > 1) {                   
          outputFilePath = outputFilePath.splice(1).join(srsteeConstants.srsteeRoot);
          fileObj['path'] = path.normalize(outputFilePath);          
          fs.lstat(filePath, function(err, stats) {
            if(!stats.isSymbolicLink()) {              
              fs.readFile(filePath, 'utf8', function(err, data) {
                if(err) {
                  console.log('Something went wrong while reading the file - ' + filePath);
                  console.log(err);
                }else{
                  fileObj['payload'] = data;
                  result.push(fileObj);
                }

                if(files2Process <= 0) {
                  this.$topResolve(result);
                }
                files2Process--;
              }.bind({$topResolve: resolve, $topReject: reject}));
            }
          });
        }else {
          if(files2Process <= 0) {
            resolve(result);
          }
          files2Process--;
        }
      });
    }catch(ex) {
      reject();
    }
  });
}
