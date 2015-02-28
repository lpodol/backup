var http = require('http');
var ejs = require('ejs');
var fs = require('fs');

var server = http.createServer(function(request, response){

var object = {
  name:"Lauren",
  age: 33,
  color : "blue"
}

var str = fs.readFileSync('assessment.ejs', 'utf8');
var rendered = ejs.render(str, {name: object.name, color: object.color, age: object.age});
  response.end(rendered);
})


server.listen(3000);

console.log('listening on port 3000!');
