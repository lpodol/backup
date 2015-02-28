var everyother = function(array,x){
  var newarray = []
  for (var i = 0; i < array.length; i++){
    if (i % 2 != 0){
      newarray.push(array[i]*x);
    }else{
      newarray.push(array[i] + x);
    }
  }
  console.log(newarray)
}

everyother([1,5,10,2,28,50],8);
