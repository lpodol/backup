//first assessment

//var age = function(x,y){
  //return x + " is " + y + " years old."}
//console.log(age("Lauren",33))

//second assessment

var bouncer = function(y){
 if (y>=21){
   return "Come in"//if you need to use this function as a variable, console.log it later, and make it a return for now. otherwise you can't run it inside another function.
  }else{
    return "Psh, nice try"//see above.
  }
}

//third assessment

var metabouncer = function(x,y,func){
  console.log(func(y) + ", " + x + ".");
};
metabouncer("Lauren",18,bouncer)
