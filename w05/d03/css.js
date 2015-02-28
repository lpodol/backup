var http = require ('http');
var fs = require('fs');

var server = http.createServer(function(request, response){
  console.log(request.url);

    if(request.url === "/"){
      fs.readFile("index.html", function(err, data){
        response.end(data);
      })
    }else{
      var path = request.url;
      path.slice(0,1);
        fs.readFile("css.css", function(err, data){
          response.end(data);
        })
    };
});

server.listen(2000);
