/*
    Connect Javascript strings (2)
    In this scenario we use template literals to combine strings.
    Template literals allow you to dynamically insert a string into another string at a specific position. 
    When using template literals you create strings with backticks (`).
    Adjust the code below such that the value of the variable word is inserted into the string of the variable sentence.  
    Run the code to see if the complete sentence is logged.

    const word = 'interesting';
    const sentence = `She had an ${} idea.`;
    console.log(sentence);
*/

const word = 'interesting';
const sentence = `She had an ${word} idea.`;
console.log(sentence);