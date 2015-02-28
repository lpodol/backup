# Write a method called meaning_of_life which returns the number 42 to you.
# Use this method to write a Ruby program that:
#
# Asks the user whether they want to know what the meaning of life is
# If the user enters 'y', then the meaning of life is displayed to them using the meaning_of_life method
# Otherwise, the program displays a disappointed message to the user and quits.

def meaning_of_life
  puts "42"
end

puts "Do you want to know the meaning of life?"
answer = gets.chomp
if answer === "yes"
  meaning_of_life
else
  puts "You'll never get anywhere with that attitude."
end


How to do this in JavaScript:

# var meaning_of_life = function(){
#   return 42;
# }
#
# console.log("Do you want to know the meaning of life?")
# process.stdin.on("data", function(answer){
#   var ans = answer.toString().trim();
#   if (ans === "yes"){
#     console.log(meaning_of_life());
#     process.exit();
#     }else{
#       console.log("Bummer");
#       process.exit();
#     }
#     });
