//var WebSocket = require("ws");
//var ws = new WebSocket("ws://localhost:3000");

var WebSocket = require("ws");
var ws = new WebSocket("ws://localhost:" + process.argv[2]);
ws.on("open", function(){
    console.log("Connected to server.");
});

//Pull up a server to make this work.
//wscat -l 2000
