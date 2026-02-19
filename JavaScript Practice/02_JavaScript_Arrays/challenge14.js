/*
    Check if all array elements are equal
    Write a function that takes an array as argument. It should return true if all elements in the array are equal. It should return false otherwise.

    function myFunction(arr) {
       return 
    }
    
    console.log(myFunction([true, true, true, true]))
    // expected: true 
    console.log(myFunction(['test', 'test', 'test']))
    // expected: true 
    console.log(myFunction([1, 1, 1, 2]))
    // expected: false 
    console.log(myFunction(['10', 10, 10, 10]))
    // expected: false 
*/

function myFunction(arr) {
   return new Set(arr).size === 1;
}
 
console.log(myFunction([true, true, true, true]))
// expected: true 
console.log(myFunction(['test', 'test', 'test']))
// expected: true 
console.log(myFunction([1, 1, 1, 2]))
// expected: false 
console.log(myFunction(['10', 10, 10, 10]))
// expected: false 