var alcohol = ["whisky","beer","vodka"];
var drugs = ["MJ", "coke", "shrooms"];

var mergeArray = function(a,b){
  var c = []

  var length = Math.max(a.length, b.length);

  for (i=0; i<length; i++){
    c.push(a[i]);
    c.push(b[i]);
  }
  return c
}

var weekend = mergeArray(alcohol,drugs)
console.log(weekend)
