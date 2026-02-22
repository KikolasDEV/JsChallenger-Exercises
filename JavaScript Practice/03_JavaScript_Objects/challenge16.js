/*
    Replace empty strings in object with null values
    Write a function that takes an object as argument. Some of the property values contain empty strings. 
    Replace empty strings and strings that contain only whitespace with null values. Return the resulting object

    function myFunction(obj) {
    
    }
    
    console.log(myFunction({ a: 'a', b: 'b', c: '' }))
    // expected: { a: 'a', b: 'b', c: null } 
    console.log(myFunction({ a: '', b: 'b', c: ' ', d: 'd' }))
    // expected: { a: null, b: 'b', c: null, d: 'd' } 
    console.log(myFunction({ a: 'a', b: 'b ', c: ' ', d: '' }))
    // expected: { a: 'a', b: 'b ', c: null, d: null } 
*/

function myFunction(obj) {
	
}
 
console.log(myFunction({ a: 'a', b: 'b', c: '' }))
// expected: { a: 'a', b: 'b', c: null } 
console.log(myFunction({ a: '', b: 'b', c: ' ', d: 'd' }))
// expected: { a: null, b: 'b', c: null, d: 'd' } 
console.log(myFunction({ a: 'a', b: 'b ', c: ' ', d: '' }))
// expected: { a: 'a', b: 'b ', c: null, d: null } 