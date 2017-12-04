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
Ninja.prototype.kick = function(opponent) {
    if (opponent instanceof Ninja ){
        console.log(opponent.name+" was kicked by " + this.name + "and lost 15 Health!")
        opponent.health -= 15;
    }
    else{
        console.log("No target.")
    }
    return this;
};
Ninja.prototype.punch = function(opponent) {
    if (opponent instanceof Ninja ){
        console.log(opponent.name+" was punched by " + this.name + "and lost 5 Health!")
        opponent.health -= 5;
    }
    else{
        console.log("No target.")
    }
    return this;
};
// Create new instances with the new keywow
const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
// -> "My ninja name is Hyabusa!"
ninja1.showStats();
// -> "Name: Hayabusa, Health: 100, Speed: 3, Strength: 3"

const blueNinja = new Ninja("Goemon");
const redNinja = new Ninja("Bill Gates");
redNinja.punch(blueNinja);
// -> "Goemon was punched by Bill Gates and lost 5 Health!"

blueNinja.kick(redNinja);
// -> "Bill Gates was kicked by Goemon and lost 15 Health!"
redNinja.showStats();
blueNinja.showStats();