var WebSocket = require("ws");
var ws = new WebSocket ("ws://localhost:3000");

ws.on("open", function() {
  ws.on("message", function(x){
    console.log(x.toString());
  });
});
