var WebSocketServer = require("ws").Server;
var server = new WebSocketServer({port: 3000});
var x = 0;

server.on("connection", function(ws){
  x++;
  if (x===1){
    console.log("A client connected!")
  }else{
    console.log("A client attempted to connect and was declined.");
    ws.send("Sorry, no can do.");
    ws.close();
  };
});
