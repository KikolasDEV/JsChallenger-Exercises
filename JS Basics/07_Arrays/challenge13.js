/*
    Add element to array
    With the array.push() method we can add an element to an array. It can be applied to an existing array to append new values to the end of the array.
    In the example below, we apply the array.push() method to extend the array numbers with the number 3. 
    To solve this task, append another number to the end of the array. Use the correct number such that the console.log() statement to log true.

    const numbers = [1, 2, 3, 4];
    numbers.push(3);


    console.log(numbers);
    console.log(numbers[5] === 5 && numbers.length === 6);
*/

const numbers = [1, 2, 3, 4];
numbers.push(3);
numbers.push(5);

console.log(numbers);
console.log(numbers[5] === 5 && numbers.length === 6);