// Assignment: Ninja Class
// Create a new object constructor called Ninja with the following attributes:

// name
// health
// speed (private)
// strength (private)
// Speed and strength should be 3 by default. Health should be 100 by default.

// Ninja should have the following methods:

// sayName() - This should log that Ninja's name to the console.
// showStats() - This should show the Ninja's name, strength, speed, and health.
// drinkSake() - This should add +10 Health to the Ninja
// Example Outputs

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
}

Ninja.prototype.sayName = function() {
    console.log('My name is ' + this.name);
    return this;
};

const ninja1 = new Ninja('Goemon');
ninja1.sayName();
ninja1.showStats();