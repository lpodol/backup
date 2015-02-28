var WebSocketServer = require("ws").Server;
var server = new WebSocketServer({port: 3000});

server.on("connection", function(ws){
  ws.send("Please enter a string with the syntax 'message,g'.");
  ws.on("message",function(x){
    var string = x.toString();
    var array = string.split(",");
    var array2 = array[0].split("");
        for (var i = 0; i < array2.length; i++){
            if (array2[i] === array[1]){
              ws.send(i.toString())
            }
        }
  });
});
