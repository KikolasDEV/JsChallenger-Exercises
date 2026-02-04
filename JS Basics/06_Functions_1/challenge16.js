/*
    Is Adult Function
    Define a function isAdult that returns true if the age parameter is 18 or above, and false otherwise.

    // Write the function isAdult below. It should:
    // - Accept an age as a parameter
    // - Return true if age is 18 or older, else return false
    
    console.log(isAdult(20)); // should be true
    console.log(isAdult(16)); // should be false
*/

function isAdult(age) {
	let result = age >= 18 ? true : false;
	return result;
}
 
console.log(isAdult(20)); // should be true
console.log(isAdult(16)); // should be false
