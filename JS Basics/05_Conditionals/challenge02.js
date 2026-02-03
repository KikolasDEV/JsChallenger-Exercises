/*
    Password Hint
    Check the length of the string stored in the variable password. 
    If it has fewer than 6 characters, change the value of msg to 'Too short'.
    Use the .length property and the < (smaller than) operator to do this.

    const password = 'abc';
    let msg = 'Password correct';
    
    // your code here...
    if (
    
    console.log(msg) // expected: 'Too short'
*/

const password = 'abc';
let msg = 'Password correct';

if (password.length < 6) {
  msg = 'Too short';
}
console.log(msg) // expected: 'Too short'