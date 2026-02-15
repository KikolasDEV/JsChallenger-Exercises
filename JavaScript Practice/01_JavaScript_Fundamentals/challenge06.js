/*
   Get last n characters of string
   Write a function that takes a string as argument. Extract the last 3 characters from the string. Return the result
   
   function myFunction(str) {
      return str.reduce(str => str.length - 3);
   }
   
   console.log(myFunction('abcdefg'))
   // expected: 'efg' 
   console.log(myFunction('1234'))
   // expected: '234' 
   console.log(myFunction('fgedcba'))
   // expected: 'cba' 
*/

function myFunction(str) {
   return str.slice(-3);
}
 
console.log(myFunction('abcdefg'))
// expected: 'efg' 
console.log(myFunction('1234'))
// expected: '234' 
console.log(myFunction('fgedcba'))
// expected: 'cba' 