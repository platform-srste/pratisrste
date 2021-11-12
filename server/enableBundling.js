var fs = require("fs");
var walk    = require('walk');
var Socket = require('simple-websocket');
var hostname = "localhost:2222";
const srsteeConstants = require('./srstee-constants');
var enable_bundling = true;
if(process.argv.length >= 3) {
  enable_bundling = process.argv[2] == 1? true: false;
}
if(process.argv.length == 4) {
  hostname = "localhost:" + process.argv[3];
}

if(process.argv.length == 5) {
  hostname = process.argv[3] + ":" + process.argv[4];
}

var socket = new Socket('ws://' + hostname);
console.log('hostname = ' + hostname);
var accessToken = "";
let configFileData = fs.readFileSync('./server/config.json', 'utf-8');
let configJSON = JSON.parse(configFileData);

socket.on('connect', function () {
  //Authenticate with the superuser and get access token     
  let credentialsJSON = {username: configJSON.username, password: configJSON.password};
  console.log("Authorizing integration user - " + configJSON.username);
  socket.send(JSON.stringify({payload: srsteeConstants.getAccessToken+ '-' + JSON.stringify(credentialsJSON)}));  
});

socket.on('data', function (data) {
  if(!data) return;
  var dataJSON = JSON.parse(data);
  if(dataJSON) {
      switch(dataJSON.type) {
          case srsteeConstants.getAccessToken:                      
            console.log('Authenticated successfully... initiating the push request');  
            accessToken = dataJSON.payload;                        
            var message = srsteeConstants.enableBundling;
            if(!enable_bundling)
              message = srsteeConstants.disableBundling;
            socket.send(JSON.stringify({payload: message, accessToken}));
            break;  
          case "Done": 
            socket.destroy();
            break;
          case srsteeConstants.authFailed:
              console.error('Authenticated failed... Try again!');
              socket.destroy();
              break;                                                        
      }
    }  
});

socket.on('close', function () {
  console.log('Completed successfully!');
});
