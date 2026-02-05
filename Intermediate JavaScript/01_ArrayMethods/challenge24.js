/*
    Concatenate Uppercase Strings into a Word
    Given an array of strings, use forEach to append all uppercase characters together into a new word.
    Tip: You can compare each string to its .toUpperCase() value to check if it is uppercase.

    const arr = ['C', 'o', 'O', 'b', 'D', 'x', 'E', 'y', 'z'];
    let word = '';
    
    // Your code here:
    
    console.log(word);
*/

const arr = ['C', 'o', 'O', 'b', 'D', 'x', 'E', 'y', 'z'];
let word = '';
 
arr.forEach(function(letter){
	if (letter === letter.toUpperCase()) {
		word += letter;
	}
})

/*
arr.forEach(letter => {
    if (letter === letter.toUpperCase()) word += letter;
})
*/
 
console.log(word);