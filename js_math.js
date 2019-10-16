// Assignment: JavaScript Math
// Complete the below challenges using JavaScript's Math object.

// Math 1
// Write a function called zero_negativity(). This function should take an array. Return true if the input array contains no negative numbers, return false if it does.
function zero_negativity(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            return false;
        }
    }
    return true;
}
zero_negativity([2, 4, 6, 7, 4, 86]);
zero_negativity([18, 6, -10, 4, 86]);

// Math 2
// Write a function called is_even(). This function should take a number. Return true if the input number is even, return false if the number is odd.
function is_even(num) {
    if (num % 2 !== 0) {
        return false;
    }
    return true;
}
is_even(5);
is_even(10);


// Math 3
// Write a function called how_many_even(). This function should take an array. Return the total number of elements in the array that are even. You may call is_even() to solve this.
function how_many_even(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (is_even(arr[i]) == true) {

            count++;
        }
    }
    return count;
}

how_many_even([3, 22, 4, 13, 24, 15, 6, 10]);
how_many_even([3, 2, 4, 6, 24, 8, 6, 10]);
how_many_even([3, 5, 7, 11]);

// Math 4
// Write a function called create_dummy_array(). This function should take a number n. Return an array of random numbers between 0 and 9 with the length of n.
function create_dummy_array(n) {
    let random_num = [];
    for (let i = 0; i < n; i++) {
        random_num.push(Math.floor(Math.random() * 10));
    }
    return random_num;
}
create_dummy_array(4);
create_dummy_array(8);


// Math 5
// Write a function called random_choice(). This function should take an array. Return a random element of the array, based on its length. This function should never return undefined.

function random_choice(arr) {
    rand_num = Math.floor(Math.random() * arr.length);
    return arr[rand_num];
}
random_choice([2, 4, 6, 7, 8, 9]);
random_choice([2, 4, 6]);