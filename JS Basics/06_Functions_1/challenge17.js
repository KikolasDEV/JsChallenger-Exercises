/*
    Check for Empty String
    Write a function isEmpty that takes a string and returns true if it is an empty string (''), and false otherwise.

    // Test cases
    console.log(isEmpty('') === true);
    console.log(isEmpty('hello') === false);
    console.log(isEmpty(' ') === false);
*/

function isEmpty(str) {
	let result = str === '' ? true : false;
	return result;
}

console.log(isEmpty('') === true);
console.log(isEmpty('hello') === false);
console.log(isEmpty(' ') === false);
