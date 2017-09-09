var _ = {
  map: function(arr, callback){
    var result = [];
    for(i in arr){
      result.push(callback(arr[i]));
    }
    return result;
  },
  reduce: function(arr, callback, memo){
    var result = memo;
    for(i in arr){
      result = callback(result, arr[i]);
    }
    return result;
  },
  find: function(arr, callback){
    var result;
    for(i in arr){
      if (callback(arr[i])){
        result = arr[i]
        break;
      }
    }
    return result;
  },
  filter: function(arr, callback){
    var result = [];
    for(i in arr){
      if(callback(arr[i])){
        result.push(arr[i]);
      }
    }
    return result;
  },
  reject: function(arr, callback){
    var result = [];
    for(i in arr){
      if(callback(arr[i]) === false){
        result.push(arr[i]);
      }
    }
    return result;
  }
}

var mapped = _.map([1,2,3], function(num){return num*3;});
console.log(mapped);

var reduced = _.reduce([1,2,3], function(memo, num){return memo + num;}, 0);
console.log(reduced);

var found = _.find([1, 2, 3, 4, 5, 6], function(num){return num % 2 == 0;});
console.log(found);

var filtered = _.filter([1, 2, 3, 4, 5, 6], function(num){return num % 2 == 0;});
console.log(filtered);

var rejected = _.reject([1, 2, 3, 4, 5, 6], function(num){return num % 2 == 0;});
console.log(rejected);
