var BaseballPlayer = function(name,team){
  this.name = name;
  this.team = team;
}

var players = [];

players.push(new BaseballPlayer("Wild Thing Vaughn", "Cleveland Indians"))
players.push(new BaseballPlayer("Nuke Laloosh", "Durham Bulls"))
players.push(new BaseballPlayer("All the Way May", "Rockford Peaches"))

for (var i = 0; i<players.length; i++){
  var player = players[i];
  console.log(player.name + " is on the " + player.team + ".")
}
