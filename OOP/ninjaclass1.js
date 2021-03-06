// Define the class
function Ninja(name) {
    this.name = name;
    this.health = 100;
    var speed = 3;
    var strength = 3;
    this.showStats = function() {
        console.log("Name: "+ this.name + " Health: "+this.health + " Speed: "+speed+ " Strength: "+strength);
        return this;
    };
}
// Attach class methods using .prototype
Ninja.prototype.sayName = function() {
    console.log("My ninja name is "+this.name+"!");
    return this;
};

Ninja.prototype.drinkSake = function() {
    this.health += 10;
    return this;
};
// Create new instances with the new keywow
const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
// -> "My ninja name is Hyabusa!"
ninja1.showStats();
// -> "Name: Hayabusa, Health: 100, Speed: 3, Strength: 3"