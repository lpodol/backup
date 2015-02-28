var WebSocketServer = require("ws").Server;
var server = new WebSocketServer({port: 3000});

server.on("connection", function(ws) { //server side. open this before client side "send.js"!
  ws.on("message", function(message){
    console.log(message);
  });
  ws.send("hello");
});
