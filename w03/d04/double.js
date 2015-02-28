var doublePrint = function(x){
  console.log(x*2);
}

var doublePrintArray = function(array){
  array.forEach(doublePrint);
};
doublePrintArray([1,2,3])
