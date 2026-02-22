/*
    Creating Javascript Sets
    Write a function that takes three elements of any type as arguments. 
    Create a Set from those elements. Return the result

function myFunction(a, b, c) {
	return 
}
 
console.log(myFunction(1, 'b', 3))
// expected: new Set([1, 'b', 3])
console.log(myFunction(NaN, null, false))
// expected: new Set([NaN, null, false])
console.log(myFunction('a', ['b'], { c: 3 }))
// expected: new Set(['a', ['b'], { c: 3 }])
*/

function myFunction(a, b, c) {
	return new Set([a, b, c]);
}
 
console.log(myFunction(1, 'b', 3))
// expected: new Set([1, 'b', 3])
console.log(myFunction(NaN, null, false))
// expected: new Set([NaN, null, false])
console.log(myFunction('a', ['b'], { c: 3 }))
// expected: new Set(['a', ['b'], { c: 3 }])