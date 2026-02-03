/*
    Display a User’s Age with Template Literals
    Given the variables name and age, use a template literal to create a sentence in the format: [name] is [age] years old. 
    Assign this string to the variable sentence.

    const name = 'Alex';
    const age = 27;
    
    // add your code here...
    
    // expected output: 'Alex is 27 years old'
    console.log(sentence);
*/

const name = 'Alex';
const age = 27;
const sentence = `${name} is ${age} years old`;
console.log(sentence);