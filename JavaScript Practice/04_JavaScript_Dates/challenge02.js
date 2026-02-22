/*
    Return the number of days between two dates
    Write a function that takes two date instances as argument. It should return the number of days that lies between those dates.

    function myFunction(a, b) {
    
    }
    
    console.log(myFunction(new Date('2020-06-11'), new Date('2020-06-01')))
    // expected: 10 
    console.log(myFunction(new Date('2000-01-01'), new Date('2020-06-01')))
    // expected: 7457 
*/

function myFunction(a, b) {
	const diff = Math.abs(a - b);
	return diff / 1000 / 60 / 60 / 24;
}
 
console.log(myFunction(new Date('2020-06-11'), new Date('2020-06-01')))
// expected: 10 
console.log(myFunction(new Date('2000-01-01'), new Date('2020-06-01')))
// expected: 7457 