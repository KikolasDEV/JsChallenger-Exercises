/*
    Access Multiple Object Properties with Bracket Notation
    Create a function getValues that takes an object and an array of keys, and returns an array of values for those keys. 
    Use bracket notation to access the properties.

    // Use bracket notation to access each property given in the keys array
    // You may want to use an array method to loop through the array of keys
    
    function getValues(obj, keys) {
      // your code here
    
    }
    
    const myObject = { a: 1, b: 2, c: 3, d: 4 };
    const keys = ['b', 'c', 'a'];
    
    const result = getValues(myObject, keys);
    console.log(result); // [2, 3, 1]
*/
 
function getValues(obj, keys) {
    return keys.map(key => obj[key]);
}
 
const myObject = { a: 1, b: 2, c: 3, d: 4 };
const keys = ['b', 'c', 'a'];
 
const result = getValues(myObject, keys);
console.log(result); // [2, 3, 1]