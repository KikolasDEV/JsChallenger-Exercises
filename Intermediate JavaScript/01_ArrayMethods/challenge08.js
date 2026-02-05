/*
    Return the Length of Each Word Using map
    Given an array of words, create a new array that contains the length of each word. Use the map method to transform the array.

    const words = ['apple', 'banana', 'cherry'];
    const lengths = 
    console.log(lengths);
*/

const words = ['apple', 'banana', 'cherry'];
const lengths = words.map(word => word.length);
console.log(lengths);