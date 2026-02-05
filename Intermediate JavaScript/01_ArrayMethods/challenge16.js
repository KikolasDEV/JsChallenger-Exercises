/*
    Filter strings longer than a certain length
    Refactor the following code: Instead of using a for loop to collect all strings longer than 4 characters in the array, rewrite it using Array.filter().

    const words = ['apple', 'car', 'banana', 'dog', 'elephant'];
    
    // Rewrite the following logic using Array.filter() //
    const longWords = [];
    for (let i = 0; i < words.length; i++) {
      if (words[i].length > 4) {
        longWords.push(words[i]);
      }
    }
    //////////////////////////////////////////////////////
    
    console.log(longWords); // should log: ['apple', 'banana', 'elephant']
*/

const words = ['apple', 'car', 'banana', 'dog', 'elephant'];
 
const longWords = words.filter(word => word.length > 4);
 
console.log(longWords); // should log: ['apple', 'banana', 'elephant']