/*
    Find the Maximum Value in an Array
    Use the reduce method to find the largest number in the numbers array and assign it to the variable max.

    const numbers = [17, 29, 8, 56, 42];
    const max = numbers.reduce(
    
    console.log(max); // expected: 56
*/

const numbers = [17, 29, 8, 56, 42];
const max = numbers.reduce((n, num) => n > num ? n : num);
 
console.log(max); // expected: 56