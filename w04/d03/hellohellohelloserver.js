var WebSocketServer = require("ws").Server;
var server = new WebSocketServer({port:3000});

var clients = [];

server.on("connection", function(ws) {

  var regularGreeting = function() {
    ws.send("Hello every second.");
  };

  clients.push(ws);

  ws.on("close", function() {
    var x = clients.indexOf(ws);
    clients.splice(x,1);
    console.log(clients.length);
  });
  
  console.log(clients.length);

  clients.forEach(function(client) {
    client.send("Client connected.");
  });

  setInterval(regularGreeting,1000);
});
