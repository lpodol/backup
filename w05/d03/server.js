var http = require("http")
var fs = require("fs")

var server = http.createServer(function(request,response){
  fs.readFile("index.html", function(err, data){
    response.end(data);
  });
});
server.listen(2000);
