function Person(name, age){
  var self = this;
  var privateVariable = "This variable is private";
  var privateMethod = function(){
    console.log("This is a private method for " + self.name);
    console.log(self);
  }
  this.name = name;
  this.age = age;
  this.greet = function(){
    console.log("Hello my name is "+this.name+" and I am "+this.age+" years old!");
    console.log("Also my privateVariable says: "+ privateVariable);
    privateMethod();
  }
}
var eliza = new Person("Eliza", 48);
eliza.greet();
