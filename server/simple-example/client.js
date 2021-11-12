var Socket = require('simple-websocket')
 
var socket = new Socket('ws://localhost:2222')
socket.on('connect', function () {
  // socket is connected!
  var lastSyncId = Date.now();
  socket.send('sup! - ' + lastSyncId);

})
 
socket.on('data', function (data) {
  console.log('got message: ' + data)
})
