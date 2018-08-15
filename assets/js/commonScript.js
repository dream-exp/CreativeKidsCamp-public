var socket = io();
 
socket.on('changeURL', function (url) {
  location.href = url;
});