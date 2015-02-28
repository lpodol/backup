characters = ["Mario", "Luigi", "Peach",
  "Toad", "Sonic", "Tails",
  "Robotnick", "Crash Bandicoot", "Nathan Drake",
  "Solid Snake"]

cee = characters.select{|n| (n.include? "c") || (n.include? "C")}
puts cee
