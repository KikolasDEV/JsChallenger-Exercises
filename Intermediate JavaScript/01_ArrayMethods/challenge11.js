/*
    Capitalize Words Starting With a Certain Letter
    Given an array of words, use map to return a new array where all words starting with the letter 'a' are converted to uppercase. 
    Words that don’t start with 'a' should stay the same.
    For example, ['ant', 'dog', 'alligator', 'cat'] should become ['ANT', 'dog', 'ALLIGATOR', 'cat'].
    Tip: You can use toUpperCase() to turn a word into uppercase.

    const words = ['apple', 'banana', 'apricot', 'pear'];
    
    const result = words.map(
    
    console.log(result);
*/

const words = ['apple', 'banana', 'apricot', 'pear'];
 
const result = words.map(word => word[0] === 'a' ? word.toUpperCase() : word);
 
console.log(result);