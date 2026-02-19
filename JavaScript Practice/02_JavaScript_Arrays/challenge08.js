/*
    Count number of negative values in array
    Write a function that takes an array of numbers as argument. Return the number of negative values in the array.

    function myFunction(a) {
       return 
    }
    
    console.log(myFunction([1,-2,2,-4]))
    // expected: 2 
    console.log(myFunction([0,9,1]))
    // expected: 0 
    console.log(myFunction([4,-3,2,1,0]))
    // expected: 1 
*/

function myFunction(a) {
   return a.filter((num) => num < 0).length;
}
 
console.log(myFunction([1,-2,2,-4]))
// expected: 2 
console.log(myFunction([0,9,1]))
// expected: 0 
console.log(myFunction([4,-3,2,1,0]))
// expected: 1 