/*
    Remove last n characters of string
    Write a function that takes a string (a) as an argument. Remove the last 3 characters of a. Return the result.

    function myFunction(a) {
       return 
    }
    
    console.log(myFunction('abcdefg'))
    // expected: 'abcd'
    console.log(myFunction('1234'))
    // expected: '1'
    console.log(myFunction('fgedcba'))
    // expected: 'fged'
*/

function myFunction(a) {
   return a.slice(0, -3);
}
 
console.log(myFunction('abcdefg'))
// expected: 'abcd'
console.log(myFunction('1234'))
// expected: '1'
console.log(myFunction('fgedcba'))
// expected: 'fged'