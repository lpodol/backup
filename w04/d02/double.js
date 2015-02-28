console.log("Enter a number");
process.stdin.on("data", function(data){
  var newdata = data.toString().trim();
  var answer = newdata*2;
  console.log(answer);
});
