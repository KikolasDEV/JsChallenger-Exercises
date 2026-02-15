/*
    Extract first half of string
    Write a function that takes a string (a) as argument. Extract the first half of a. Return the result

    function myFunction(a) {
       return 
    }

    console.log(myFunction('abcdefgh'))
    // expected: 'abcd' 
    console.log(myFunction('1234'))
    // expected: '12' 
    console.log(myFunction('gedcba'))
    // expected: 'ged' 
*/

function myFunction(a) {
   return a.slice(0, a.length / 2);
}
 
console.log(myFunction('abcdefgh'))
// expected: 'abcd' 
console.log(myFunction('1234'))
// expected: '12' 
console.log(myFunction('gedcba'))
// expected: 'ged' 