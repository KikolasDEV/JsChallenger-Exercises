/*
    Check if Any Value is Negative
    Complete the function so that it returns true if the array contains at least one negative number, and false otherwise. Use the Array.prototype.some method.

    function hasNegative(arr) {
      // your code here
    
    }
    
    console.log(hasNegative([1, 2, 3, 4])); // false
    console.log(hasNegative([0, -2, 5, 10])); // true
    console.log(hasNegative([0, 7, 8])); // false
*/

function hasNegative(arr) {
    return arr.some(n => n < 0);
}
 
console.log(hasNegative([1, 2, 3, 4])); // false
console.log(hasNegative([0, -2, 5, 10])); // true
console.log(hasNegative([0, 7, 8])); // false