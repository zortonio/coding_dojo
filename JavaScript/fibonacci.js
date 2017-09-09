function fib(){
  let one = 0;
  let two = 1;
  function nacci(){
    let total = one + two;
    console.log(two);
    one = two;
    two = total;
  }
  return nacci;
}

let fibCounter = fib();
fibCounter()
fibCounter()
fibCounter()
fibCounter()
fibCounter()
fibCounter()
