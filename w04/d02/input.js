console.log("Please enter two numbers with a space in between.");
process.stdin.on("data", function(x){
  var arr = x.toString().split(" "); //Turn into string to split.
  var sum = parseInt(arr[0]) + parseInt(arr[1]); //Turn back into numbers to add.
  console.log(sum);
});
