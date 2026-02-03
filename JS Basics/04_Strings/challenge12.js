/*
    Are the First and Last Characters the Same?
    Given a string, assign the variable isSame to true if the first and last characters of the string are the same, otherwise set it to false. 
    Use string indexing and the length property.

    const str = 'radar';
    
    const isSame = 
    
    console.log(isSame); // Expected output: true
*/

const str = 'radar';
 
const isSame = str[0] === str[str.length - 1];
 
console.log(isSame); // Expected output: true