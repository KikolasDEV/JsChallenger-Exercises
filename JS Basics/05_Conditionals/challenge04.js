/*
    if statement - add missing condition
    In the code below, the if...statement will assign a new value to the variable text. But only if its condition is met. Currently, the condition is missing.
    Add any condition that will be satisfied such that the console.log() statement logs true.

    let text = 'hello';
    
    if () {
       text = text + ' world';
    }
    
    console.log(text === 'hello world'); // expected: true
*/
let text = 'hello';
 
if (text.length > 4) {
   text = text + ' world';
}
 
console.log(text === 'hello world'); // expected: true