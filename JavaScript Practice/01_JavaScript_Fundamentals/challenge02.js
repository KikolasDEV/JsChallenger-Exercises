/*
    Comparison operators, strict equality
    Write a function that takes two values, say a and b, as arguments. 
    Return true if the two values are equal and of the same type

    function myFunction(a, b) {
       return 
    }
    
    console.log(myFunction(2, 3))
    // expected: false 
    console.log(myFunction(1, '1'))
    // expected: false 
    console.log(myFunction('10', '10'))
    // expected: true 
*/

function myFunction(a, b) {
   return a === b;
}
 
console.log(myFunction(2, 3))
// expected: false 
console.log(myFunction(1, '1'))
// expected: false 
console.log(myFunction('10', '10'))
// expected: true 