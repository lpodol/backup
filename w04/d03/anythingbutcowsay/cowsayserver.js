var cowsay = require("cowsay")
var WebSocketServer = require("ws").Server;
var server = new WebSocketServer({port: 3000});

server.on("connection", function(ws){
  console.log("Connected to server!");
  ws.on("message",function(message){
    var moo = cowsay.say({text: message})
    ws.send(moo);
  })
});
