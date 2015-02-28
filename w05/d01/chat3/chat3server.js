var WebsocketServer = require("ws").Server;
var wss = new WebsocketServer({port: 3000});
var connections = [];
var history = [];

console.log("Connected and listening on port 3000.");

wss.on("connection", function(ws){
  ws.on("message", function(message){

    console.log(message);

    var parsed = JSON.parse(message);

    var baddies = ["poo","fart"];
    var kick = false;
    baddies.forEach(function(badword){
      if (parsed.message.indexOf(badword) !== -1){
        kick = true;
      }
      if (kick){
        ws.close();
        var i = connections.indexOf(ws);
        connections.splice(i, 1);
      }else{
        history.push(parsed);
        var out = [parsed]
        connections.forEach(function(elem){
          if (elem !== ws){
            elem.send(JSON.stringify(out));
          }
        })
      }
    })

    // console.log("Client connected.");
    // connections.push(ws);
    // ws.send(JSON.stringify(history));

    ws.on("close", function(){
      var i = connections.indexOf(ws);
      connections.splice(i, 1);
    });
  })
});
