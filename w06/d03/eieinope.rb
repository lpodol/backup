puts "Please enter a word."
word = gets.chomp.downcase
vowelCounter = 0
consonants = []

word.split("").each do |letter|
  if letter == "a" || letter == "e" || letter == "i" || letter == "o" || letter == "u"
    vowelCounter+=1
  else
    consonants = consonants.push(letter)
  end
end

if vowelCounter>1
  puts consonants
else
  puts "Heck, no."
end
