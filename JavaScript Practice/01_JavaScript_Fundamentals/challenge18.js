/*
    Round a number to 2 decimal places
    Write a function that takes a number (a) as argument. Round a to the 2nd digit after the decimal point. Return the rounded number

    function myFunction(a) {
       return 
    }
    
    console.log(myFunction(2.12397))
    // expected: 2.12 
    console.log(myFunction(3.136))
    // expected: 3.14 
    console.log(myFunction(1.12397))
    // expected: 1.12 
    console.log(myFunction(26.1379))
    // expected: 26.14  
*/

function myFunction(a) {
   return Number(a.toFixed(2));
}
 
console.log(myFunction(2.12397))
// expected: 2.12 
console.log(myFunction(3.136))
// expected: 3.14 
console.log(myFunction(1.12397))
// expected: 1.12 
console.log(myFunction(26.1379))
// expected: 26.14 