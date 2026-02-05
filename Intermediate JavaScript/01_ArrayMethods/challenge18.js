/*
    Check if Array Includes a Fruit
    Given an array of fruits and a string representing a fruit name, use the includes method to determine if the fruit is present in the array. 
    Assign the result (true or false) to the variable hasFruit.

    const fruits = ['apple', 'banana', 'cherry', 'date'];
    const fruitToCheck = 'banana';
    let hasFruit = 
    console.log(hasFruit);
*/

const fruits = ['apple', 'banana', 'cherry', 'date'];
const fruitToCheck = 'banana';
let hasFruit = fruits.includes(fruitToCheck);
console.log(hasFruit);