/*
    Filter Out Numbers Less Than 10
    Use the filter method to create a new array that contains only the numbers in arr that are greater than or equal to 10.

    const arr = [5, 12, 8, 130, 44, 3, 25];
    const result = arr.filter(
    console.log(result);
*/

const arr = [5, 12, 8, 130, 44, 3, 25];
const result = arr.filter(n => n >= 10);
console.log(result);