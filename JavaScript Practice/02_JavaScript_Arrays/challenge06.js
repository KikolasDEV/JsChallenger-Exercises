/*
    Remove a specific array element
    Write a function that takes an array (a) and a value (b) as argument. 
    The function should remove all elements equal to 'b' from the array. Return the filtered array.

    function myFunction(a, b) {
       return 
    }
    
    console.log(myFunction([1, 2, 3], 2))
    // expected: [1, 3] 
    console.log(myFunction([1, 2, '2'], '2'))
    // expected: [1, 2] 
    console.log(myFunction([false, '2', 1], false))
    // expected: ['2', 1] 
    console.log(myFunction([1, 2, '2', 1], 1))
    // expected: [2, '2'] 
*/

function myFunction(a, b) {
   return a.filter(num => num !== b);
}
 
console.log(myFunction([1, 2, 3], 2))
// expected: [1, 3] 
console.log(myFunction([1, 2, '2'], '2'))
// expected: [1, 2] 
console.log(myFunction([false, '2', 1], false))
// expected: ['2', 1] 
console.log(myFunction([1, 2, '2', 1], 1))
// expected: [2, '2'] 