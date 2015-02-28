var cowsay = require("cowsay")
var WebSocket = require("ws");
var ws = new WebSocket("ws://localhost:3000");
ws.on ("open", function(){
  console.log("Connected to server!");
  ws.on("message",function(message){
    var moo = cowsay.say({text: message})
    ws.send(moo);
  })
});
