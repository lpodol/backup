var num = parseInt(process.argv[2])
var random = Math.floor(2*Math.random())
if (num === random){
  console.log("Success!")
}else{
  console.log("Sorry, we were looking for " + random + ".")
}
