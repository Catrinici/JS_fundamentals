// Assignment: JavaScript Basics II
// In this assignment, complete the function magic_multiply and ensure it passes all the test inputs and matches their results. Modify magic_multiply until all the tests pass. Do not create a new magic_multiply for each test!

// function magic_multiply(x, y){
//     // --- your code here ---
//     return x;
// }
// Test 1
// In order to make this test pass, we will need to add logic to magic_multiply. Whenever we call magic_multiply for 5 and 2, the returned result should always be 10. Remember, we must use these specific inputs!

// let test1 = magic_multiply(5, 2);
// console.log(test1);
// // => 10
// Test 2
// let test2 = magic_multiply(0, 0);
// console.log(test2);
// // => "All inputs 0"
// Test 3
// let test3 = magic_multiply([1, 2, 3], 2);
// console.log(test3);
// // => [2, 4, 6]
// Hint: You will need to handle your output differently depending on if x is an array or an integer.

// Test 4
// let test4 = magic_multiply(7, "three");
// console.log(test4);
// // => "Error: Can not multiply by string"
// Test 5 - Bonus
// let test5 = magic_multiply("Brendo", 4);
// console.log(test5);
// // => "BrendoBrendoBrendoBrendo"
// How could we check if an array is an array?

function magicMultiply(x, y) {

    // 2
    if (x === 0 && y === 0) {
        return "All inputs 0";
    }

    // 3
    if (x.constructor === Array) {
        for (let i = 0; i < x.length; i++) {
            x[i] = x[i] * y
        }
        return x;
    }

    // 4
    if (y.constructor === String) {
        return "Error: Can not multiply by string";
    }

    // 5
    if (x.constructor === String) {
        let newString = "";
        for (let i = 0; i < y; i++) {
            newString += x;
        }
        return newString;
    }

    // 1
    return x * y;
}

const test1 = magicMultiply(5, 2);
const test2 = magicMultiply(0, 0);
const test3 = magicMultiply([1, 2, 3], 2);
const test4 = magicMultiply(7, "three");
const test5 = magicMultiply("Brendo", 4);

console.log(test1);
console.log(test2);
console.log(test3);
console.log(test4);
console.log(test5);