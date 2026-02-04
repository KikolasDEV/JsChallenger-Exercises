/*
    Is Weekend Function
    Create a function isWeekend that takes a day name as a string (like "Monday", "Saturday", etc.) and returns true if it's "Saturday" or "Sunday", and false otherwise.

    // Write a function that checks if the given day is a weekend
    
    console.log(isWeekend("Monday")); // false
    console.log(isWeekend("Tuesday")); // false
    console.log(isWeekend("Wednesday")); // false
    console.log(isWeekend("Thursday")); // false
    console.log(isWeekend("Friday")); // false
    console.log(isWeekend("Saturday")); // true
    console.log(isWeekend("Sunday")); // true
*/

function isWeekend(day) {
	if (day == 'Saturday' || day == 'Sunday') {
		return true;
	} else {
		return false;
	}
}

/*
function isWeekend(day) {
  return day === "Saturday" || day === "Sunday";
}
*/
 
console.log(isWeekend("Monday")); // false
console.log(isWeekend("Tuesday")); // false
console.log(isWeekend("Wednesday")); // false
console.log(isWeekend("Thursday")); // false
console.log(isWeekend("Friday")); // false
console.log(isWeekend("Saturday")); // true
console.log(isWeekend("Sunday")); // true
