/*
    Filter Strings by Length
    Use the filter method to return only the strings in the array that have a length greater than 3.

    const words = ['cat', 'tiger', 'dog', 'elephant', 'bee', 'lion'];
    const result = 
    console.log(result);
*/

const words = ['cat', 'tiger', 'dog', 'elephant', 'bee', 'lion'];
const result = words.filter(word => word.length > 3);
console.log(result);