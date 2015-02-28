var exit = function(data){
  var newdata = data.toString().trim();
  if (newdata === "exit"){
    process.exit();
  }else{
    console.log("Press Enter to continue.")
  };
};
console.log("Press Enter to continue.")
process.stdin.on("data",exit);
