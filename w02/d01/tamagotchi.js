var Tamagotchi = function(hungry,sick,age){
  this.hungry = false;
  this.sick = false;
  this.age = 0;
  this.feed = function(){
    if (this.hungry){
      console.log("That was good.");
      this.hungry = false;
    }else{
      console.log("No, thanks; I'm full.");
      this.hungry = true;
    }
  }
  this.sleep = function(){
    console.log("zzzzzzz");
    }
  this.medicate = function(){
    if (this.sick===true){
      console.log("I feel much better.");
      this.stick=false;
    }else{
      console.log("No, thanks. I feel fine.");
      this.sick = true;
    }
  }
  this.increaseAge = function(){
    this.age = (this.age + 1);
    console.log("Happy birthday to me! I am " + this.age + " years old!");
  }
}

var dog = new Tamagotchi()
  dog.bark = function(){
      console.log("Ruff ruff.");
    }
    dog.goOutside = function(){
      console.log("I own that tree now!");
    }

var cat = new Tamagotchi()
  cat.meow = function(){
    console.log("Meow!");
  };
  cat.useLitterBox = function(){
    console.log("Buried treasure!");
  }

var fish = new Tamagotchi()
  fish.swim = function(){
    console.log("Just keep swimming!");
  }

for (i=0;i<2;i++){
  dog.feed();
}

for (i=0;i<2;i++){
  dog.increaseAge();
}

dog.bark()
dog.goOutside()

cat.meow()
cat.sleep()
cat.useLitterBox()

for (i=0;i<1;i++){
  fish.medicate();
}

fish.swim()
