function starString(num){
    var str = "";
    if (typeof(num) === 'number'){
        for (var i = 0; i < num; i++){
            str += "*";
        }
    return str;
  }
}
let stars = starString(8);
console.log(stars);

function draw_stars(arr){
  if (Array.isArray(arr)){
    
    for (var i in arr){
      var str = "";
      if (typeof(arr[i]) === 'number')
        for (var j = 0; j < i; j++){
          str += "*";
        }
      else if(typeof(arr[i]) === 'string' && arr[i].length > 0){
        for (var k = 0; k < arr[i].length; k++){
          str += arr[i][0].toLowerCase();
        }
      }
      console.log(str);
    }
  }
}
let x = [4, 6, 1, 3, 5, 7, 25];
draw_stars(x);
x = [4, "Tom", 1, "Michael", 5, 7, "Jimmy Smith"];
draw_stars(x);
