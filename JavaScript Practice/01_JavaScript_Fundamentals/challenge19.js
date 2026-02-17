/*
    Split a number into its digits
    Write a function that takes a number (a) as argument. 
    Split a into its individual digits and return them in an array. 
    Hint: you might want to change the type of the number for the splitting

    function myFunction(a) {
       return 
    }
    
    console.log(myFunction(10))
    // expected: [1,0] 
    console.log(myFunction(931))
    // expected: [9,3,1] 
    console.log(myFunction(193278))
    // expected: [1,9,3,2,7,8] 
*/

function myFunction(a) {
   return a.toString().split('').map(Number);
   /*
    Alternative solution:
    const string = a + '';
    const strings = string.split('');
    return strings.map(digit => Number(digit))
   */
}
 
console.log(myFunction(10))
// expected: [1,0] 
console.log(myFunction(931))
// expected: [9,3,1] 
console.log(myFunction(193278))
// expected: [1,9,3,2,7,8] 