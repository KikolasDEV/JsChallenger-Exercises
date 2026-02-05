/*
    Filter Even Numbers
    Given an array of numbers, use the filter method to return only the even ones. Store the result in the evenNumbers variable.
    Hint: You can check if a number is even by using the modulus operator: num % 2 === 0.

    const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
    const evenNumbers = numbers.filter(
    console.log(evenNumbers);
*/

const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
const evenNumbers = numbers.filter(n => n % 2 == 0);
console.log(evenNumbers);