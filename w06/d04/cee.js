characters = ["Mario", "Luigi", "Peach",
"Toad", "Sonic", "Tails",
"Robotnick", "Crash Bandicoot", "Nathan Drake",
"Solid Snake"]

var c_characters = characters.filter(function(char){
  return char.toUpperCase().indexOf("C") > -1;
})
console.log(c_characters)
