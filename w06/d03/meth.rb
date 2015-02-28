puts "Please enter an integer and a word."
answer = gets.chomp
answerArr = answer.split(" ")
integer = answerArr[0].to_i
word = answerArr[1]

def meth(integer,word)
  if integer % 2 == 0
    puts word
  else
    puts word.reverse
  end
end

meth(integer,word)
