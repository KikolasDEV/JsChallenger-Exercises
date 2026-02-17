/*
    Multiplication, division, and comparison operators
    Write a function that takes two numbers (a and b) as arguments. 
    If a is smaller than b, divide a by b. Otherwise, multiply both numbers. Return the resulting value

    function myFunction(a, b) {
       return 
    }
    
    console.log(myFunction(10, 100))
    // expected: 0.1 
    console.log(myFunction(90, 45))
    // expected: 4050 
    console.log(myFunction(8, 20))
    // expected: 0.4 
    console.log(myFunction(2, 0.5))
    // expected: 1 
*/

function myFunction(a, b) {
   return a < b ? a / b : a * b;
}
 
console.log(myFunction(10, 100))
// expected: 0.1 
console.log(myFunction(90, 45))
// expected: 4050 
console.log(myFunction(8, 20))
// expected: 0.4 
console.log(myFunction(2, 0.5))
// expected: 1 