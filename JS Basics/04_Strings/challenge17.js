/*
    Create a Greeting with Template Literals
    Given the variable name, use a template literal to create a greeting string in the format "Hello, [name]".
    Assign this string to the variable greeting.

    const name = 'Alex';
    
    // adjust code here...
    const greeting = "Hello, ";
    
    console.log(greeting); // expected: "Hello, Alex"
*/

const name = 'Alex';
const greeting = `Hello, ${name}`;
console.log(greeting); // expected: "Hello, Alex"