/*
    Calculate the sum of an array of numbers
    Write a function that takes an array of numbers as argument. It should return the sum of the numbers.

    function myFunction(a) {
       return 
    }
    
    console.log(myFunction([10,100,40]))
    // expected: 150 
    console.log(myFunction([10,100,1000,1]))
    // expected: 1111 
    console.log(myFunction([-50,0,50,200]))
    // expected: 200 
*/

function myFunction(a) {
   return a.reduce((num, a) => num + a, 0);
}
 
console.log(myFunction([10,100,40]))
// expected: 150 
console.log(myFunction([10,100,1000,1]))
// expected: 1111 
console.log(myFunction([-50,0,50,200]))
// expected: 200 