puts "Please enter a string."
string = gets.chomp
newArr = string.split(" ")

for x in newArr
  if x.length % 2 == 0
    puts x
  end
end
