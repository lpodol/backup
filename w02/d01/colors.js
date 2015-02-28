var colors = {
  dan: "purple",
  lisa: "kale",
  carl: "green",
  lenny: "pink",
  tina: "maroon",
  ted: "yellow",
  crawford: "pink",
  kobe: "silver",
  david: "white",
  sean: "purple",
  nina: "black",
  robyn: "aqua",
  larry: "orange",
  sam: "purple"
}

var people = Object.keys(colors)

for (i=0;i>=people.length;i++){
    if (colors[people[i]]==="pink" || colors[people[i]]==="purple"){
      console.log (people[i]);
    };
};
