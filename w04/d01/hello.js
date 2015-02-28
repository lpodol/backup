var hello = function(data){
    var newdata = data.toString().trim();
    if (newdata === "Hello"){
      console.log("Hi! How are you?");
    }else{
      console.log("Right, right.")
    };
};
console.log("Type in your input.")
process.stdin.on("data",hello);
