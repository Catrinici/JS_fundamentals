// Class and constructor
// Let's define a simple class: Dot. Dots have an x value and a y value. Consider the below definition:

class Dot {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        console.log('You created a Dot!');
    }
}
const dot1 = new Dot(10, 10);
//*******************************************************************************

// ES5 way
function Dot(x, y) {
    this.x = x;
    this.y = y;
}
Dot.prototype.showLocation = function() {
    console.log('This Dot is at x ' + this.x + ' and y ' + this.y);
};
var dot1 = new Dot(55, 20);
dot1.showLocation();

// ES6 way
class Dot {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    showLocation() {
        // ES6 String Interpolation! Note that the string is enclosed in backticks, not quotes.
        console.log(`This Dot is at x ${this.x} and y ${this.y}`);
    }
}
const dot2 = new Dot(5, 13);
dot2.showLocation();