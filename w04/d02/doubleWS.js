var WebSocketServer = require("ws").Server;
var server = new WebSocketServer({port: 3000});

server.on("connection", function(ws){
  ws.send("Please enter two numbers with a space in between.");
  ws.on("message",function(x){
    var string = x.toString();
    var split = string.split(" ");
    var sum = parseInt(split[0]) + parseInt(split[1]);
    ws.send(sum);
  });
});
