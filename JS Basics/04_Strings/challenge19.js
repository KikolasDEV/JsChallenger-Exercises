/*
    Simple Math in a Template Literal
    Given two numbers a and b, use a template literal to create a string that shows their sum in the following format: 'a + b = sum'.
    For example, if a = 4 and b = 5, result should be '4 + 5 = 9'. 
    Assign this string to the variable result.

    const a = 4;
    const b = 5;
    
    // adjust here...
    const result = `
    
    // expected output: '4 + 5 = 9'
    console.log(result);
*/

const a = 4;
const b = 5;
const result = `${a} + ${b} = ${a + b}`;
// expected output: '4 + 5 = 9'
console.log(result);
