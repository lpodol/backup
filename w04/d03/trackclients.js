var WSS = require("ws").Server;
var server = new WSS ({port:3000});

var clients = []

server.on("connection", function(ws){
  clients.push(ws);
  ws.on("close",function(){
    var x = clients.indexOf(ws)
    clients.splice(x,1)
  })
  console.log(ws);
  clients.forEach(function(client){
    client.send("Sean has lots of hair.")
  });
});


//make server, port, make empty array of clients, push new clients into empty array on connection. if client disconnects, splice into the array, take him out so nothing is sent into him.
