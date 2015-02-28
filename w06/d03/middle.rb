puts "Please enter two random integers."
answer = gets.chomp
answerArr = answer.split(" ")
first_number = answerArr[0].to_i
second_number = answerArr[1].to_i

random = rand(-40..120).to_i
puts random

if (first_number>random) && (second_number>random)
  puts "too cold"
elsif (first_number<random) && (second_number<random)
  puts "too hot"
else
  puts "just right."
end
