module.exports = function(){
  return {
    add: function(num1, num2){
      console.log('The sum is:', num1+num2);
    },
    multiply: function(num1, num2){
      console.log('The product is:', num1*num2);
    },
    square: function(num){
      console.log('The square is:', num*num);
    },
    random: function(num1, num2){
      min = Math.ceil(num1);
      max = Math.floor(num2);
      console.log('The random integer is:', Math.floor(Math.random()*(max-min))+min);
    }
  }
}
