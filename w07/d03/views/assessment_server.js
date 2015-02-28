var ejs = require('ejs');
var fs = require('fs');

//read in our template file into a string
var str = fs.readFileSync('assessment.ejs', 'utf8');
var rendered = ejs.render(str, {obj["name"]: "Lauren"});

console.log(rendered);
