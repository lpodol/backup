var cheese = ["Brie", "Swiss", "Blue"];
var mergeString = function(array){
  var array2 = []
  for (i=0;i<array.length;i++){
    array2.push("Hey there, " + array[i] + ".")
  }
    return array2.join();
}

var cheeseString = mergeString(cheese);
console.log(cheeseString)
