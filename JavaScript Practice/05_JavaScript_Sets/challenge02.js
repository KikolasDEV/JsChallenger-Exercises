/*
    Convert a Set to Array
    Write a function that takes a Set as argument. Convert the Set to an Array. Return the Array

    function myFunction(set) {
       return
    }
    
    console.log(myFunction(new Set([1, 2, 3])))
    // expected: [1, 2, 3] 
    console.log(myFunction(new Set([123])))
    // expected: [123] 
    console.log(myFunction(new Set(['1', '2', '3'])))
    // expected: ['1', '2', '3'] 
    console.log(myFunction(new Set('123')))
    // expected: ['1', '2', '3'] 
*/

function myFunction(set) {
   return [...set];
}
 
console.log(myFunction(new Set([1, 2, 3])))
// expected: [1, 2, 3] 
console.log(myFunction(new Set([123])))
// expected: [123] 
console.log(myFunction(new Set(['1', '2', '3'])))
// expected: ['1', '2', '3'] 
console.log(myFunction(new Set('123')))
// expected: ['1', '2', '3'] 