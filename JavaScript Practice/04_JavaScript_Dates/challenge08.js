/*
    Return the next nearest quarter hour of a date
    Write a function that takes a Date instance as argument. 
    It should return the next nearest quarter hour in minutes. 
    For example, if the given date has the time 10:01 the function should return 15

    function myFunction(date) {
    
    }
    
    console.log(myFunction(new Date(2021, 8, 10, 15, 14, 00)))
    // expected: 15 
    console.log(myFunction(new Date(2021, 8, 10, 15, 31, 00)))
    // expected: 45 
    console.log(myFunction(new Date(2021, 8, 10, 15, 22, 00)))
    // expected: 30 
*/

function myFunction(date) {
   const quarter = 15 * 60 * 1000;
   const closestQuarter = new Date(Math.round(date / quarter) * quarter);
   const nextQuarter = closestQuarter.getTime() < date.getTime() ? new Date(closestQuarter.getTime() + quarter) : closestQuarter;
   return nextQuarter.getMinutes();
}
 
console.log(myFunction(new Date(2021, 8, 10, 15, 14, 0)))
// expected: 15 
console.log(myFunction(new Date(2021, 8, 10, 15, 31, 0)))
// expected: 45 
console.log(myFunction(new Date(2021, 8, 10, 15, 22, 0)))
// expected: 30 