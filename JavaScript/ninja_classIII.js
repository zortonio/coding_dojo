class Ninja{
  constructor(name){
    this.speed = 3;
    this.strength = 3;
    this.name = name;
    this.health = 100;
  }

  sayName(){
    console.log(`My ninja name is ${this.name}.`)
  }

  showStats(){
    console.log(`Name: ${this.name}, Health: ${this.health}, Speed: ${this.speed}, Strength: ${this.strength}`);
  }

  drinkSake(){
    this.health = this.health+10;
    return this;
  }
}
class Sensei extends Ninja{
  constructor(name){
    super(name);
    this.health = 200;
    this.speed = 10;
    this.strength = 10;
    this.wisdom = 10;
  }
  speakWisdom(){
    super.drinkSake();
    console.log("Insert words of wisdom here!");
  }
}

let ninja1 = new Ninja("Cornelius");
ninja1.sayName();
ninja1.drinkSake().showStats();

let ninja2 = new Sensei("Master Splinter");
ninja2.speakWisdom();
ninja2.showStats();
