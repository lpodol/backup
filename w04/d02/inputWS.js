var WebSocketServer = require("ws").Server;
var server = new WebSocketServer({port: 3000});

server.on("connection", function(ws){
  ws.send("Please enter two numbers with a space in between.");
  ws.on("message",function(x){
    var arr = x.toString().split(" ");
    var sum = parseInt(arr[0]) + parseInt(arr[1]);
    ws.send(sum.toString());
  });
});
