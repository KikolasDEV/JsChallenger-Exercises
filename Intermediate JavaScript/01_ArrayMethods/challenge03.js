/*
    Find the First Even Number
    Use the find method on the provided array to return the first even number. If there is no even number in the array, the result should be undefined..
    Hint: You can check if a number is even by using the modulus operator: num % 2 === 0.

    const arr = [13, 17, 19, 22, 25, 30];
    const firstEven = 
    console.log(firstEven);
*/

const arr = [13, 17, 19, 22, 25, 30];
const firstEven = arr.find(number => number % 2 === 0);
console.log(firstEven);