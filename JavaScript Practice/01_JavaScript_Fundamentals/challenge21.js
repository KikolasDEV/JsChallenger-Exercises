/*
    Return the next higher prime number
    This challenge is a little bit more complex. Write a function that takes a number (a) as argument. 
    If a is prime, return a. If not, return the next higher prime number.

    function myFunction(a) {
    
    }
    
    console.log(myFunction(38))
    // expected: 41 
    console.log(myFunction(7))
    // expected: 7 
    console.log(myFunction(115))
    // expected: 127 
    console.log(myFunction(2000))
    // expected: 2003 
*/

function myFunction(a) {
	for (let i = 2; i <= Math.sqrt(a); i++) {
        if (a % i === 0) {
            return myFunction(a + 1);
        }
    }
    return a;
}
 
console.log(myFunction(38))
// expected: 41 
console.log(myFunction(7))
// expected: 7 
console.log(myFunction(115))
// expected: 127 
console.log(myFunction(2000))
// expected: 2003 