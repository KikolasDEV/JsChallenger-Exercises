/*
    Toggle Booleans into a New Array
    Given an array of boolean values called flags, use forEach to create a new array called toggled that contains the opposite boolean value for each element 
    (i.e., true becomes false and vice versa). Do not modify the original flags array.

    const flags = [true, false, false, true, true];
    const toggled = [];
    flags.forEach(flag => {
      // Your code here
    
    });
    console.log(toggled);
    // Should print: [false, true, true, false, false]
*/

const flags = [true, false, false, true, true];
const toggled = [];

flags.forEach(flag => { 
    toggled.push(!flag); 
});
console.log(toggled);
// Should print: [false, true, true, false, false]