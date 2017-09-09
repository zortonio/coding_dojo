function Ninja(name){
  var self = this;
  var speed = 3;
  var strength = 3;
  this.name = name;
  this.health = 100;

  this.sayName = function(){
    console.log("My ninja name is " + this.name);
  };

  this.showStats = function(){
    console.log("Name: "+this.name+", Health: "+this.health+", Speed: "+speed+", Strength: "+strength)
  };

  this.drinkSake = function(){
    this.health = this.health + 10;
    return this;
  };

  this.punch = function(ninja){
    if(ninja instanceof Ninja){
      ninja.health = ninja.health - 5;
      console.log(ninja.name +" was punched by "+this.name+" and lost 5 health.")
    } else{
      console.log(this.name +" cannot hit this type of object!");
    }

  };

  this.kick = function(ninja){
    if(ninja instanceof Ninja){
      ninja.health = ninja.health - (15*strength);
      console.log(ninja.name + " was kicked by "+this.name+" and lost "+parseInt(15*strength)+" health!");
    }else{
      console.log(this.name+" cannot hit this type of object!");
    }
  }
}
