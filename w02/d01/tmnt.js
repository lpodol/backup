var Leonardo = {
  name: "Leonardo",
  color: "blue",
  weapon: "ninjato",
  namedAfter: "Leonardo da Vinci",
  likesPizza: true,
  pizzaEaten: false,
  eatPizza: function(){
    if (Leonardo.pizzaEaten===true){
      console.log("Leonardo has already eaten pizza.");
    }else{
      console.log("Leonardo is eating pizza.");
    }
}

//var Michaelangelo = {
  //name: "Michaelangelo",
  //color: "orange",
  //weapon: "nunchuks",
  //namedAfter: "Michaelangeo Buonarroti",
  //likesPizza: true
//}

//var Raphael = {
  //name: "Raphael",
  //color: "red",
  //weapon: "sai",
  //namedAfter: "Raffaello Sanzio da Urbino",
  //likesPizza: true
//}

//var Donatello = {
  //name: "Donatello",
  //color: "purple",
  //weapon: "bo",
  //namedAfter: "Donato di Niccolo di Betto Bardi",
  //likesPizza: true
//}

//var turtles = [Leonardo,Michaelangelo,Raphael,Donatello]

//for (i=0;i<turtles.length;i++){
  //var name = turtles[i].name
  //var color = turtles[i].color
  //var weapon = turtles[i].weapon
  //var namedAfter = turtles[i].namedAfter
  //var likes = function(){
    //var pizza = turtles[i].likesPizza
    //if(pizza===true){
      //return "He likes pizza."
  //  }
  //}
  //console.log(name + " wears a " + color + " bandana. He uses a " + weapon + ", and he's named after " + namedAfter + ". " + likes())
//}
