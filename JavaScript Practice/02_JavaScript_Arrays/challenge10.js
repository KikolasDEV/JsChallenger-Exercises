/*
    Sort an array of numbers in descending order
    Write a function that takes an array of numbers as argument. It should return an array with the numbers sorted in descending order.

    function myFunction(arr) {
       return 
    }
    
    console.log(myFunction([1, 3, 2]))
    // expected: [3, 2, 1] 
    console.log(myFunction([4, 2, 3, 1]))
    // expected: [4, 3, 2, 1] 
*/

function myFunction(arr) {
   return arr.sort((a, b) => b - a);
}
 
console.log(myFunction([1, 3, 2]))
// expected: [3, 2, 1] 
console.log(myFunction([4, 2, 3, 1]))
// expected: [4, 3, 2, 1] 