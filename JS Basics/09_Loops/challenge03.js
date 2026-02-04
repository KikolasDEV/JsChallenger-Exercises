/*
    Multiply Each Number in an Array by 2
    Use a for loop to double each number in the array numbers and store them in a new array called doubledNumbers. 
    Make sure the resulting array has only the doubled values, in the same order.

    const numbers = [2, 6, 3, 7];
    const doubledNumbers = [];
    
    // Use a for loop:
    
    console.log(doubledNumbers); // [4, 12, 6, 14]
    console.log(doubledNumbers.length === 4);
*/

const numbers = [2, 6, 3, 7];
const doubledNumbers = [];
 
for (let i = 0; i < numbers.length; i++) {
	doubledNumbers.push(numbers[i] * 2);
}
 
console.log(doubledNumbers); // [4, 12, 6, 14]
console.log(doubledNumbers.length === 4);