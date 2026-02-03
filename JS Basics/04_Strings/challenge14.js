/*
    Case Sensitivity in String Comparisons
    Are string comparisons case sensitive in JavaScript?
    Try it out. Assign areEqual to true if str1 and str2 are exactly equal, otherwise assign false.

    const str1 = 'Hello';
    const str2 = 'hello';
    
    const areEqual = 
    
    console.log(areEqual);
*/

const str1 = 'Hello';
const str2 = 'hello';
 
let areEqual = str1 === str2;
// the output is false because string comparisons are case sensitive 
 
console.log(areEqual);
