/*
    Make use of function scope to return correct value.
    Use what you have learned about Function Scope to make the function multiply return the value 50.

    const x = 10;
    
    function multiply() {
       const y = 10;
    
       return x * y;
    };
    
    const result = multiply();
    console.log(result);
    // expected output = 50
*/

const x = 10;
 
function multiply() {
   const y = 10;
   const x = 5;
   return x * y;
};
 
const result = multiply();
console.log(result);
// expected output = 50