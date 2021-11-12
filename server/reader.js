var fs = require("fs");
var path = require('path');
var Socket = require('simple-websocket');
var deepEqual = require('deep-equal');
var shell = require('shelljs');
var hostname = "localhost:2222";
if(process.argv.length == 3) 
  hostname = "localhost:" + process.argv[2];

if(process.argv.length == 4) {
  hostname = process.argv[2] + ":" + process.argv[3];
}
  
let configFileData = fs.readFileSync(path.normalize('./server/config.json'), 'utf-8');
let configJSON = JSON.parse(configFileData);
var accessToken = "";
var socket = new Socket('ws://' + hostname);

const createSymlink = require('create-symlink');
var payloadChunks = [];

//var socket = new Socket('ws://ec2-18-188-86-133.us-east-2.compute.amazonaws.com:2222');
const srsteeConstants = require('./srstee-constants');

socket.on('connect', function () {
  //Authenticate with the superuser and get access token     
  let credentialsJSON = {username: configJSON.username, password: configJSON.password};
  console.log("Authorizing integration user - " + configJSON.username);
  socket.send(JSON.stringify({payload: srsteeConstants.getAccessToken+ '-' + JSON.stringify(credentialsJSON)}));
});

socket.on('close', function () {
  console.log('\nCompleted successfully!');
});

socket.on('data', function (data) {
  if(!data) return;
  var dataJSON = JSON.parse(data);
  if(dataJSON) {
    switch(dataJSON.type) {
      case srsteeConstants.getAccessToken:         
        var lastSyncId = Date.now();  
        accessToken = dataJSON.payload;
        console.log('Authenticated successfully... requesting for the pull request');
        socket.send(JSON.stringify({payload: srsteeConstants.request2Server2SendFilesHeader+ '-' + lastSyncId, accessToken}));
        break;        
      case srsteeConstants.authFailed:
        console.error('Authenticated failed... Try again!');
        socket.destroy();
        break;   
      case srsteeConstants.payloadSent:         
        processPayload(payloadChunks);
        break;
      case srsteeConstants.payloadChunkSent:         
        let payloadFiles = JSON.parse(dataJSON.payload);
	payloadChunks.push(...payloadFiles);
        break;
      case srsteeConstants.pushStatusHeader:
        process.stdout.clearLine();
        process.stdout.cursorTo(0);                
        let processed =  dataJSON.payload.processed;      
	let lastProcessedCategory = dataJSON.payload.Name;
        process.stdout.write("Files read = "  + processed);
        process.stdout.write("Last processed category = "  + lastProcessedCategory);
        break;
    }
  }
});

var processPayload = function(dataArry) {    
  var pendingFiles = dataArry.length;
  for(var indx in dataArry) {
    let fileRec = dataArry[indx];      
    if(fileRec) {
        let pathArry = fileRec['filePath'].split('/');
        let fileName = pathArry[pathArry.length - 1] + '';
        delete pathArry[pathArry.length - 1];
        let directoryPath = pathArry.join('/');
        directoryPath = path.normalize(srsteeConstants.srsteeRoot + directoryPath);
        shell.mkdir('-p', directoryPath);
        directoryPath = directoryPath.endsWith('/')?directoryPath: directoryPath + "/";
        let fullFilePath = path.join(directoryPath, fileName);        
        fs.readFile(fullFilePath, 'utf8', function(err, fileContent) {
          if(err) {
            if(err.errno == -2) {
              //File Not Found... create a new file...
              fs.writeFile(fullFilePath, fileRec['payload'], function (err) {
                if (err) {
                  console.log("Error occurred... " + err);
                  throw err;
                }
                pendingFiles--;
                if(pendingFiles == 0) 
                  socket.destroy();
              });
            }else {
              console.log("Error occurred... " + err);
              pendingFiles--;
                if(pendingFiles == 0) 
                  socket.destroy();
            }
          }else {
            //compare data and update the file accordingly...
            if(!deepEqual(fileContent, fileRec['payload'])) {
              fs.writeFile(fullFilePath, fileRec['payload'], function (err) {
                if (err) throw err;
              });
              console.log('added file - ' + fullFilePath);
              pendingFiles--;
                if(pendingFiles == 0) 
                  socket.destroy();
            }else{
              // console.log('No update required for ' + fullFilePath);
              pendingFiles--;
                if(pendingFiles == 0) 
                  socket.destroy();
            }
          }
        });
      }
  }    
}  
