var doublePrintRet = function(array){
  var newarray = []
  array.forEach(function(elem){
    newarray.push(elem*2);
  });
  return newarray;
}
console.log(doublePrintRet([1,2,3]));
