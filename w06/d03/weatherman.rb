# Weatherman
#
# Write a method that takes a weather condition and a temperature. Weather can be "rainy", "sunny", "windy". Temperature can be "hot" or "cold".
#
# If the condition is rainy and the temperature is cold, tell the user, "better stay inside!"
# If the condition is rainy and the temperature is hot, tell the user, "sounds like a gross combination"
# If the condition is sunny and the temperature is hot, tell the user, "maybe best to go swimming"
# If the condition is windy or the temperature is cold tell the user, "bundle up!"
# If the condition is windy and the temperature is hot, tell the user "Tornado warning!"

def weatherman (condition, temperature)
  if condition == "rainy" && temperature == "cold"
    puts "Better stay inside!"
  elsif condition == "rainy" && temperature == "hot"
    puts "Sounds like a gross combination."
  elsif condition == "sunny" && temperature == "hot"
    puts "Maybe best to go swimming."
  elsif condition == "windy" && temperature == "cold"
    puts "Bundle up!"
  elsif condition == "windy" && temperature == "hot"
    puts "Tornado warning!"
  end
end
weatherman("windy", "cold")
