/*
    Connect Javascript strings (3)
    Here we created a string with backticks (`). But, we forgot to wrap the term 1+1 with the correct syntax.
    What we want is that it is recognized as a JavaScript expression and evaluated as such. 
    Adjust the code below such that the term 1+1 is evaluated and the result inserted into the string.

    const sentence = `The ice cream costs 1+1 dollars`;
    console.log(sentence);
*/

const value = 1+1;
const sentence = `The ice cream costs ${value} dollars`;
console.log(sentence);