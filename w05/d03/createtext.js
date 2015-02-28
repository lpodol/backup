var name = process.argv[2]
var text = process.argv[3]

var fs = require("fs");
var txt = text; //The text you want in your text file.
fs.writeFile(name,txt,function(err){//Name the text, create a parameter for the text you want to input.
  if (err){
    console.log(err)
  }else{
    console.log("It worked!")//Will appear in node.
  }
});
