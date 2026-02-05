/*
    Count Occurrences of a Value in an Array
    Write a function that counts how many times a given target value appears in the array arr. 
    Use forEach to iterate through the array. Store the count in the count variable.

    const arr = [1, 2, 3, 2, 4, 2, 5];
    const target = 2;
    let count = 0;
    
    // Use forEach to count occurrences of target in arr
    console.log(count); // should print 3
*/

const arr = [1, 2, 3, 2, 4, 2, 5];
const target = 2;
let count = 0;
 
arr.forEach(function(num) {
	if (num === target) {
		count += 1;
	}
})

console.log(count); // should print 3