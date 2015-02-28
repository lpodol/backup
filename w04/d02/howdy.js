var WebSocket = require("ws");
var ws = new WebSocket("ws://localhost:3000");

ws.on("open",function(){
    var howdy = function(){
      ws.send("Howdy, server!")
    };
    setInterval(howdy,1000);
  });

//or setInterval(function(){
//      ws.send("Howdy, server!")}, 1000);
//})
