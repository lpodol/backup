var a = [3,4,5,6,20,11];

var removeEvens = function(array){
  var counter = 0
  while (counter<array.length){
    if (array[counter] % 2 === 0){
      array.splice(counter,1);
    }else{
    counter++
    }
  }
  return array;
}

var b = removeEvens(a);
console.log(b);
