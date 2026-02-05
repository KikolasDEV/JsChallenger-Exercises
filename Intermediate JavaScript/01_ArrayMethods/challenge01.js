/*
    Convert a Classic For Loop to a For...of Loop
    Refactor the code below to use a for...of loop instead of a traditional for loop, so that it works the same way. This makes your code cleaner and more modern!

    const fruits = ['apple', 'banana', 'cherry'];
    let output = '';
    
    for (let i = 0; i < fruits.length; i++) {
      output += fruits[i] + ' ';
    }
    
    console.log(output.trim());
*/

const fruits = ['apple', 'banana', 'cherry'];
let output = '';
 
/* for (let i = 0; i < fruits.length; i++) {
  output += fruits[i] + ' ';
}
*/

for (const fruit of fruits) {
  output += fruit + ' ';
}
 
console.log(output.trim());