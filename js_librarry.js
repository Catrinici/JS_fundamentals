// Assignment I: JavaScript Library
// Finish the five methods attached to the _ object to create your own custom library.  The purpose of this assignment is to show how a simple JavaScript library can be made.

// Consider the below example:

// //Can we make this into a method of an object?
// function each(arr, callback) {
//   // loop through the array
//   for(var i = 0; i < arr.length; i++) {
//     callback(arr[i]); // invoking the callback many times... delegation!
//   }
// }
// Your mission is to build your own version of the underscore library. Try to get as close as you can to what underscore provides for each example below.

// To create your own custom JavaScript library, you will just add methods to a JS object! (Later on when we teach you about immediate functions you’ll see how to make this more robust to build libraries like jQuery!).

// Let’s build a few methods of underscore!

// var _ = {
//    map: function() {
//      //code here;
//    },
//    reduce: function() {
//      // code here;
//    },
//    find: function() {
//      // code here;
//    },
//    filter: function() {
//      // code here;
//    },
//    reject: function() {
//      // code here;
//    }
//  }
// // you just created a library with 5 methods!copy
// var evens = _.filter([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
// console.log(evens); // if things are working right, this will return [2,4,6].

const _ = {
    map: function(array, callback) {
        for (let i = 0; i < array.length; i++) {
            array[i] = callback(array[i]);
        }
    },
    reduce: function(array, callback, memo) {
        // code here;
        let el = 0;
        if (memo) {
            memo = array[0];
            el = 1;
        }
        for (let i = el; i < array.length; i++) {
            memo = callback(array[i], memo);
        }
        return memo;
    },
    find: function(array, callback) {
        // code here;
        for (let i = 0; i < array.length; i++) {
            if (callback(array[i])) {
                return array[i];
            }
        }
    },
    filter: function(array, callback) {
        // code here;
        const tempArray = [];
        for (let i = 0; i < array.length; i++) {
            if (callback(array[i])) {
                tempArray.push(array[i]);
            }
        }
    },
    reject: function(array, callback) {
        // code here;
        const tempArray = [];
        for (let i = 0; i < array.length; i++) {
            if (!callback(array[i])) {
                tempArray.push(array[i]);
            }
        }
        return tempArray;
    }
};

const array = [2, 4, 5];
_.map(array, function callback(x) {
    return x * 5;
});
console.log(array);
console.log(
    _.reduce(array, function callback(x, memo) {
        return x + memo;
    })
);
console.log(
    _.find(array, function callback(x) {
        return x === 15;
    })
);
console.log(
    _.filter(array, function(x) {
        return x > 20;
    })
);