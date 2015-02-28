class Turtle
  attr_accessor :name, :color, :weapon
  def initialize(name, color, weapon)
    @name = name
    @color = color
    @weapon = weapon
  end
end

Leonardo = Turtle.new("Leonardo", "blue", "swords")
Donatello = Turtle.new("Donatello", "purple", "bo")
Raphael = Turtle.new("Raphael", "red", "sai")
Michaelangelo = Turtle.new("Michaelangelo", "orange", "nunchucks")

puts "#{Leonardo.name}'s favorite color is #{Leonardo.color} and his weapons are #{Leonardo.weapon}."
