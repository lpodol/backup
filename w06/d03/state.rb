puts "What is your name?"
name = gets.chomp
puts "Hello, #{name}, where are you from?"
state = gets.chomp.upcase
if state == "NY"
  puts "Welcome to the Empire State."
elsif state == "NJ"
  puts "You must merge well."
else
  puts "You's a flyover bitch."
end # This is your closing bracket. You need it.
