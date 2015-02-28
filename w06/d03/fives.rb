# Fives
#
# Write a method called mult_five? which accepts one number argument.
# Returns true if the argument is divisible by five, otherwise return false.
#
# Use this method within a while loop.
# Within the while loop, ask the user to enter a number or enter the word "quit".
# If the user enters a number, use mult_five? to check the number
# and let the user know if their number was divisible by five If the user entered quit, exit the program.

def mult_five(number)
  if number%5 === 0
    puts "#{number} is a multiple of 5."
  else
    puts "#{number} is not a multiple of 5." # You need the hash stuff here because you can't add an integer to a string, you idiot.
  end
end

gets_fives = true
while gets_fives
  puts "Please enter a number or enter the word quit."
  number = gets.chomp
  number.to_i
    if number == "quit"
      puts "Goodbye"
      gets_fives = false
    else
      mult_five(number.to_i)
    end
end
