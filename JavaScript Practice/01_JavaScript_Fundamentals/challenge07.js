/*
   Get first n characters of string
   Write a function that takes a string (a) as argument. Get the first 3 characters of a. Return the result

   function myFunction(a) {
      return 
   }
   
   console.log(myFunction('abcdefg'))
   // expected: 'abc' 
   console.log(myFunction('1234'))
   // expected: '123' 
   console.log(myFunction('fgedcba'))
   // expected: 'fge' 
*/

function myFunction(a) {
   return a.slice(0, 3);
}
 
console.log(myFunction('abcdefg'))
// expected: 'abc' 
console.log(myFunction('1234'))
// expected: '123' 
console.log(myFunction('fgedcba'))
// expected: 'fge' 