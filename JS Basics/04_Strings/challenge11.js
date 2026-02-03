/*
    Store the Last Character
    Here, we're trying to assign the last character of str to the variable lastChar.
    Strings are zero-indexed, so the last character is not at str[str.length], but at str[str.length - 1].

    const str = 'hello world';
    
    const lastChar = str[str.length];
    
    console.log(lastChar);
*/

const str = 'hello world';
 
const lastChar = str[str.length - 1];
 
console.log(lastChar);