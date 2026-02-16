/*
    Check whether a string contains another string and concatenate
    Write a function that takes two strings (a and b) as arguments. 
    If a contains b, append b to the beginning of a. If not, append it to the end. Return the concatenation

    function myFunction(a, b) {
       return 
    }
    
    console.log(myFunction('cheese', 'cake'))
    // expected: 'cheesecake' 
    console.log(myFunction('lips', 's'))
    // expected: 'slips' 
    console.log(myFunction('Java', 'script'))
    // expected: 'Javascript' 
    console.log(myFunction(' think, therefore I am', 'I'))
    // expected: 'I think, therefore I am' 
*/

function myFunction(a, b) {
   return a.includes(b) ? b.concat(a) : a.concat(b);
   // return a.indexOf(b) === -1 ? a + b : b + a;
}
 
console.log(myFunction('cheese', 'cake'))
// expected: 'cheesecake' 
console.log(myFunction('lips', 's'))
// expected: 'slips' 
console.log(myFunction('Java', 'script'))
// expected: 'Javascript' 
console.log(myFunction(' think, therefore I am', 'I'))
// expected: 'I think, therefore I am' 