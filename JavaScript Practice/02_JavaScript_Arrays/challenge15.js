/*
    Merge an arbitrary number of arrays
    Write a function that takes arguments an arbitrary number of arrays. It should return an array containing the values of all arrays.

    function myFunction( ...arrays ) {
       return 
    }
    
    console.log(myFunction([1, 2, 3], [4, 5, 6]))
    // expected: [1, 2, 3, 4, 5, 6] 
    console.log(myFunction(['a', 'b', 'c'], [4, 5, 6]))
    // expected: ['a', 'b', 'c', 4, 5, 6] 
    console.log(myFunction([true, true], [1, 2], ['a', 'b']))
    // expected: [true, true, 1, 2, 'a', 'b'] 
*/

function myFunction( ...arrays ) {
   return arrays.flat();
}
 
console.log(myFunction([1, 2, 3], [4, 5, 6]))
// expected: [1, 2, 3, 4, 5, 6] 
console.log(myFunction(['a', 'b', 'c'], [4, 5, 6]))
// expected: ['a', 'b', 'c', 4, 5, 6] 
console.log(myFunction([true, true], [1, 2], ['a', 'b']))
// expected: [true, true, 1, 2, 'a', 'b'] 