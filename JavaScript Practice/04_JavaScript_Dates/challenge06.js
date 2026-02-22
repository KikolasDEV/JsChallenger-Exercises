/*
    Add n days to an existing date
    Write a function that takes as argument a date instance (a) and a number (b). 
    It should add b days to a and return the number of milliseconds since January 1, 1970, 00:00:00 UTC.

    function myFunction(a, b) {
    
    }
    
    console.log(myFunction(new Date(Date.UTC(2000,1,1)), 31))
    // expected: 952041600000 
    console.log(myFunction(new Date(Date.UTC(2000,1,1)), 10))
    // expected: 950227200000 
    console.log(myFunction(new Date(Date.UTC(2000,2,28)), 2))
    // expected: 954374400000 
*/

function myFunction(a, b) {
	const currentDays = a.getDate();
    return a.setDate(currentDays + b);
}
 
console.log(myFunction(new Date(Date.UTC(2000,1,1)), 31))
// expected: 952041600000 
console.log(myFunction(new Date(Date.UTC(2000,1,1)), 10))
// expected: 950227200000 
console.log(myFunction(new Date(Date.UTC(2000,2,28)), 2))
// expected: 954374400000 