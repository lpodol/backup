var day = process.argv[2]

if ((day==="monday") || (day==="tuesday") || (day==="wednesday") || (day==="thursday") || (day==="friday")){
  console.log("That's a weekday.")
}
else if ((day==="saturday") || (day==="sunday")){
  console.log("That's a weekend day!")
}else{
  console.log("That's not a day. What are you talking about?")
}
