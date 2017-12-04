console.log("Math 1");
function zero_negativity(arr){
  if (Array.isArray(arr)){
    for (var i in arr){
      if (i < 0){
        return false;
      }
    }
    return true;
  }
  return false;
}
console.log(zero_negativity([-1, 2, -3, 4, -5, 6, -7, 8, -9, 10]));

console.log("Math 2");
function is_even(num){
  if (typeof(num) === 'number' && num % 2 === 0){
    return true;
  }
  return false;
}
console.log(is_even(1));
console.log(is_even(2));

console.log("Math 3");
function how_many_even(arr){
  var count = 0;
  if (Array.isArray(arr)){
    for (var i in arr){
      if (is_even(i) === 0){
        count++;
      }
    }
  }
  return count;
}
console.log(how_many_even([1,2,3,4,5,6,7,8,9,10]));

console.log("Math 4");
function create_dummy_array(n){
  var arr = [];
  if (typeof(n) === 'number' && n % 2 === 0){
    for (var i = 0; i < n; i++){
      var ran = Math.floor(Math.random() * 10)
      arr.push(ran);
    }
  }
  return arr;
}
console.log(create_dummy_array(10));

console.log("Math 5");
function random_choice(arr){
  if (Array.isArray(arr)){
    var ran = Math.floor(Math.random() * arr.length);
    return arr[ran];
  }
  return 0;
}
console.log(random_choice([1,2,3,4,5,6,7,8]));
