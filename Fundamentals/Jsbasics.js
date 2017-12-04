console.log("Part 1")
var x = [];
x.push("Coding");
x.push("Dojo");
x.push("Rocks");
x.pop();
console.log(x[x.length-1]);
console.log("Part 2")
const y = [];
console.log(y);
y.push(88);
console.log(y);
console.log("Part 3")
var z = [9, 10, 6, 5, -1, 20, 13, 2];
for (var i in z){
  console.log(i);
}
for (var i = 0; i < z.length-1; i++){
  console.log(i);
}
console.log("Part 4")
names = ['Kadie', 'Joe', 'Fritz', 'Pierre', 'Alphonso'];
for (var i in names){
  console.log(names[i] + " " + names[i].length);
}
for (var i in names){
  if (names[i].length == 5){
    console.log(names[i] + " " + names[i].length);
  }
}
console.log("Part 5")
function yell(string){
    return string.toUpperCase();
}
console.log(yell("this is a sentence"));