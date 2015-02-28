var sean = {
  name: "sean",
  age: 28,
  color: "purple",
}

var sam = {
  name: "sam",
  age: 28,
  color: "blue",
}

var people= [sean,sam]

for (i=0;i<people.length;i++){
  var name = people[i].name; //could have been people[i]["name"]
  console.log(name);
};

//var name = obj["name"] is the same as var name = obj.name
//people <---array
//people[i]<---object
//people[i]["name"]<---string
