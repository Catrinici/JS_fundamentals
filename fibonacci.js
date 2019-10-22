// Assignment: Fib + Nacci
// The Fibonacci sequence is a sequence where each number is the sum of its two predecessors. The sequence starts off like so: (0), 1, 1, 2, 3, 5, 8, etc. The 0 is in parenthesis because it helps the sequence get started but it is not actually part of the sequence.

// Using Closures, make the Fib function with the following specifications:

function fib() {
    let prev = 0;
    let curr = 1;

    function nacci() {
        const temp = prev;
        console.log(curr);

        prev = curr;
        curr = curr + temp;
    }
    return nacci;
}
var fibCounter = fib();
fibCounter();
fibCounter();
fibCounter();
fibCounter();
fibCounter();