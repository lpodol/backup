Class Food
  def eat
    puts "Eating now . . . "
  end
end

Class Pizza < Food
  def taste
    puts "Cowabunga!"
  end
end

Class Asparagus < Food
  def taste
    puts "Yuck!"
  end
end

Pi = Pizza.new
Pi.taste

a = asparagus.new
a.taste
