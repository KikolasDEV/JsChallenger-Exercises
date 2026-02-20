/*
    Group array of strings by first letter
    Write a function that takes an array of strings as argument. Group those strings by their first letter. 
    Return an object that contains properties with keys representing first letters. 
    The values should be arrays of strings containing only the corresponding strings. 
    For example, the array ['Alf', 'Alice', 'Ben'] should be transformed to. { a: ['Alf', 'Alice'], b: ['Ben']}

    function myFunction(arr) {
    
    }
    
    console.log(myFunction(['Alf', 'Alice', 'Ben']))
    // expected: { a: ['Alf', 'Alice'], b: ['Ben']}
    console.log(myFunction(['Ant', 'Bear', 'Bird']))
    // expected: { a: ['Ant'], b: ['Bear', 'Bird']}
    console.log(myFunction(['Berlin', 'Paris', 'Prague']))
    // expected: { b: ['Berlin'], p: ['Paris', 'Prague']}
*/

function myFunction(arr) {
	return arr.reduce((acc, cur) => {
     const firstLetter = cur.toLowerCase().charAt(0);
     return { ...acc, [firstLetter]: [...(acc[firstLetter] || []), cur] };
   }, {});
}
 
console.log(myFunction(['Alf', 'Alice', 'Ben']))
// expected: { a: ['Alf', 'Alice'], b: ['Ben']}
console.log(myFunction(['Ant', 'Bear', 'Bird']))
// expected: { a: ['Ant'], b: ['Bear', 'Bird']}
console.log(myFunction(['Berlin', 'Paris', 'Prague']))
// expected: { b: ['Berlin'], p: ['Paris', 'Prague']}