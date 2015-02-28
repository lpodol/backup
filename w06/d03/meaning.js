var meaning_of_life = function(){
  return 42;
}

console.log("Do you want to know the meaning of life?")
process.stdin.on("data", function(answer){
  var ans = answer.toString().trim();
  if (ans === "yes"){
    console.log(meaning_of_life());
    process.exit();
  }else{
    console.log("Bummer");
    process.exit();
  }
});
