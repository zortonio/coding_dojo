function orderSupplies(item) {
  let warehouse; //undefined
  const deliveryTime = Math.random() * 3000;

  return new Promise(function(resolve, reject){
    setTimeout(function(){
      warehouse = {
        paint: {
          product: 'Neon Green Paint',
          directions: function() { return 'mix it!' }
        },
        brush: {
          product: 'Horsehair brush',
          directions: function() { return 'start painting!' }
        },
        tarp: {
          product: 'Large Tarp',
          directions: function() { return 'lay it on the ground'; }
        }
      };
      console.log('sending ', item);

      if (item in warehouse){
        resolve(warehouse[item]);
      }
      else{
        reject(new Error(`Sorry, ${item} is not in stock.`));
      };
    }, deliveryTime);
  });
};

// No Edit Above this Line

function receivedItem(item){
  console.log(`Recieved ${item.product}, time to ${item.directions()}`);
};

const rollerPromise = orderSupplies('roller');
const paintPromise = orderSupplies('paint');
const brushPromise = orderSupplies('brush');
const tarpPromise = orderSupplies('tarp');

tarpPromise.then(tarp => {
  receivedItem(tarp);
  return paintPromise;
})
.then(paint => {
  receivedItem(paint);
  return brushPromise;
})
.then(brush => {
  receivedItem(brush);
  return rollerPromise;
})
.then(roller => {
  receivedItem(roller);
})
.catch(error => {
  console.log(error.message);
});

// PROMISES
// const paintPromise = new Promise(function(resolve, reject){
//   orderSupplies('paint', resolve);
// });
//
// const brushPromise = new Promise(function(resolve, reject){
//   orderSupplies('brush', resolve);
// });
//
// const tarpPromise = new Promise(function(resolve, reject){
//   orderSupplies('tarp', resolve);
// });
//
// // brushPromise.then(function(brush){
// //   receivedItem(brush);
// // })
// // .catch(function(error){
// //   console.log(error.message);
// // });
//
// tarpPromise.then(function(tarp){
//   receivedItem(tarp);
//
//   return paintPromise;
// })
// .then(function(paint){
//   receivedItem(paint);
// })
// .then(function(){
//   return brushPromise.then(receivedItem);
// })
//
// // paintPromise.then(function(paint){
// //   receivedItem(paint);
// //
// //   brushPromise.then(receivedItem);
// // })
// .catch(function(error){
//   console.log(error.message);
// });
