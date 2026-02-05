/*
    Check if Any Element is a Boolean
    Given an array of mixed values, use Array.prototype.some to determine if at least one element is a boolean (either true or false). 
    Return true if the array contains any boolean, otherwise false.

    const mixedArray = [0, 'hello', null, false, 42, 'world'];
    function containsBoolean(arr) {
      // your code here
    
    }
    const result = containsBoolean(mixedArray);
    console.log(result);
*/

const mixedArray = [0, 'hello', null, false, 42, 'world'];
function containsBoolean(arr) {
    return arr.some(x => typeof x === 'boolean');
}
const result = containsBoolean(mixedArray);
console.log(result);