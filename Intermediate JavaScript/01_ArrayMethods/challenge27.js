/*
    Check if All Files are Images
    Write a function allAreImages that takes an array of file names and returns true if every file name ends with .jpg, .png, or .gif. 
    Use Array.prototype.every() in your solution.

    // your code here
    
    const files1 = ["cat.jpg", "dog.png", "house.gif"];
    const files2 = ["readme.txt", "logo.png", "picture.jpg"];
    console.log(allAreImages(files1)); // true
    console.log(allAreImages(files2)); // false
*/

function allAreImages(arr) {
	return arr.every(x => x.endsWith('.jpg') || x.endsWith('.png') || x.endsWith('.gif'));
}

const files1 = ["cat.jpg", "dog.png", "house.gif"];
const files2 = ["readme.txt", "logo.png", "picture.jpg"];
console.log(allAreImages(files1)); // true
console.log(allAreImages(files2)); // false