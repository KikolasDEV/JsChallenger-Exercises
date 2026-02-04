/*
    Sum Even Numbers with a For Loop
    Use a for loop to calculate the sum of all even numbers in the array numbers. Store the result in the variable sum.

    const numbers = [3, 8, 11, 4, 7, 10];
    let sum = 0;
    
    // sum all even numbers in the array
    
    console.log(sum); // expected output: 22
*/

const numbers = [3, 8, 11, 4, 7, 10];
let sum = 0;
 
for (let i = 0; i < numbers.length; i++) {
	if (numbers[i] % 2 == 0) {
		sum += numbers[i]
	} 
}
 
console.log(sum); // expected output: 22