/*
    Find the position of one string in another
    Write a function that takes a string as an argument. The string contains the substring 'is'. Return the index of 'is'.

    function myFunction(a) {
       return 
    }
    
    console.log(myFunction("praise"))
    // expected: 3 
    console.log(myFunction("risky"))
    // expected: 1 
    console.log(myFunction("paris"))
    // expected: 3 
*/

function myFunction(a) {
   return a.indexOf('is');
}
 
console.log(myFunction("praise"))
// expected: 3 
console.log(myFunction("risky"))
// expected: 1 
console.log(myFunction("paris"))
// expected: 3 