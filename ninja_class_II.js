// Assignment: Ninja Class II
// Complete the below challenges using Ninja from the previous assignment.

// .punch()
// Add a new method to Ninja called .punch(). This method will take another Ninja instance and subtract 5 Health from the Ninja we passed in. Your .punch() should display a console message like the below example.

// var blueNinja = new Ninja("Goemon");
// var redNinja = new Ninja("Bill Gates");
// redNinja.punch(blueNinja);
// // -> "Goemon was punched by Bill Gates and lost 5 Health!"
// .kick()
// Now add a method to your Ninja class called .kick(). Kick will subtract 15 Health for each point of Strength the calling Ninja has, and  .punch() will take another Ninja instance.

// blueNinja.kick(redNinja);
// // -> "Bill Gates was kicked by Goemon and lost 15 Health!"
// // In this case, redNinja Bill Gates lost 15 health because blueNinja Goemon has 1 point of strength
// Validations
// Update .punch() and .kick() so that they only accept Instances of Ninja. Hint: You will need to find a way to check the constructor of an instance. You will often need to consult outside documentation to find solutions for particular features.

function Ninja(name) {
    this.name = name;
    this.health = 100;
    var speed = 3;
    var strength = 3;

    this.showStats = function() {
        console.log(
            'Name:' +
            this.name +
            '. Health:' +
            this.health +
            '. Speed:' +
            speed +
            '. Strength:' +
            strength
        );
        return this;
    };
    this.kick = function(ninja) {
        const damage = strength * 5;
        ninja.health -= damage;
        console.log(
            ninja.name + 'was kicked by' + this.name + 'and lost' + damage + 'Health!'
        );
        return this;
    };
}

Ninja.prototype.sayName = function() {
    console.log('My name is ' + this.name);
    return this;
};
Ninja.prototype.punch = function(ninja) {
    ninja.health -= 5;
    console.log(ninja.name + 'was punched by' + this.name + 'and lost 5 Health!');
    return this;
};
Ninja.prototype.drinkSake = function() {
    this.health += 10;
    return this;
};

const blueNinja = new Ninja('Bill Gates');
const redNinja = new Ninja('Hyabusa');

blueNinja.sayName();
redNinja.sayName();