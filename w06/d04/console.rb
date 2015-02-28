characters = {
  "Nintendo" => ["Mario", "Luigi", "Peach", "Toad"],
  "Sega" => ["Sonic", "Tails", "Robotnick"],
  "Sony" => ["Crash Bandicoot", "Nathan Drake", "Solid Snake"]
}

characters.each do |key,value|
  puts "#{key} has the following characters: #{value}"
  # Could also have written:
  # puts "#{key} has the following characters:"
  # value.each do |character|
  # puts characters
  #end
end
