/*
    Create an Object with Calculated Property Values
    Write a function that takes a number and returns an object with properties:
    - original (the input number)
    - double (twice the input number)
    - isPositive (true if the number is positive, false otherwise)

    // Complete the function below...
    function describeNumber(n) {
    
    }
    
    // Expected: { original: 7, double: 14, isPositive: true }
    console.log(describeNumber(7));
    
    // Expected: { original: -3, double: -6, isPositive: false }
    console.log(describeNumber(-3));
*/

function describeNumber(n) {
	return {
		original: n,
		double: n * 2,
		isPositive: n > 0
	};
}
 
// Expected: { original: 7, double: 14, isPositive: true }
console.log(describeNumber(7));
 
// Expected: { original: -3, double: -6, isPositive: false }
console.log(describeNumber(-3));