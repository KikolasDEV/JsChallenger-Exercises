/*
   Get type of value
   Write a function that takes a value as argument. Return the type of the value.
   
   function myFunction(a) {
      return 
   }
   
   console.log(myFunction(1))
   // expected: 'number' 
   console.log(myFunction(false))
   // expected: 'boolean' 
   console.log(myFunction({}))
   // expected: 'object' 
   console.log(myFunction(null))
   // expected: 'object' 
   console.log(myFunction('string'))
   // expected: 'string' 
   console.log(myFunction(['array']))
   // expected: 'object' 
*/

function myFunction(a) {
   return typeof a;
}
 
console.log(myFunction(1))
// expected: 'number' 
console.log(myFunction(false))
// expected: 'boolean' 
console.log(myFunction({}))
// expected: 'object' 
console.log(myFunction(null))
// expected: 'object' 
console.log(myFunction('string'))
// expected: 'string' 
console.log(myFunction(['array']))
// expected: 'object' 