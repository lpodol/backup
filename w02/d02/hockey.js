var stats = function(goals,assists,points,shots){
  this.goals = goals;
  this.assists = assists;
  this.points = points;
  this.shots = shots;
}

var nash = new stats()
  nash.goals = 14
  nash.assists = 7
  nash.points = 21
  nash.shots = 73
  console.log("Rick Nash has " + nash.goals + " goals, " + nash.assists + " assists, " + nash.points + " points, and " + nash.shots + " shots.")
