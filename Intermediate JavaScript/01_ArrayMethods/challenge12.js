/*
    Mapping Numbers with Their Indices
    Use the map method on nums to create a new array. Each element in the new array should be the original number plus its index. 
    Store the final array in a variable called result.
    To solve this, use the second parameter of the map callback, which gives you the current index.

    const nums = [5, 10, 15, 20];
    const result = nums.map((num,
    console.log(result);
*/

const nums = [5, 10, 15, 20];
const result = nums.map((num, index) => num + index);
console.log(result);