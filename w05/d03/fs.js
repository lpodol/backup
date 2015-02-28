var fs = require("fs");
fs.readFile("test.txt", function (err, data){
  var text = data.toString();
  var lines = text.split("\n");
  console.log(lines.length);
  lines.reverse();
  console.log(lines.join("\n"));
})
