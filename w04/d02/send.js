var WebSocket = require("ws");
var ws = new WebSocket ("ws://localhost:3000");

ws.on("open", function() { //client side
  console.log("connected to server");
  ws.on("message", function(message){
    ws.send(message);
    console.log(message);
  });
});
