def generate_welcome_string(name)
  prefix = "Hello "
  postfix = ". Have a nice day."
  prefix + name + postfix
end
puts generate_welcome_string("sam")
