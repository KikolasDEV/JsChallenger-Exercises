/*
    Return the percentage of a number
    Write a function that takes two numbers (a and b) as argument. Return b percent of a

    function myFunction(a, b) {
       return 
    }
    
    console.log(myFunction(100, 50))
    // expected: 50 
    console.log(myFunction(10, 1))
    // expected: 0.1 
    console.log(myFunction(500, 25))
    // expected: 125 
*/

function myFunction(a, b) {
   return (b / 100) * a;
}
 
console.log(myFunction(100, 50))
// expected: 50 
console.log(myFunction(10, 1))
// expected: 0.1 
console.log(myFunction(500, 25))
// expected: 125 