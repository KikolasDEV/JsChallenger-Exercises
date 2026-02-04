/*
    Refactor Duplicated Math Code into a Function
    A shop needs to calculate total price after tax for several items.
    Currently, the calculation is duplicated for each item. 
    Refactor the code so there are no repeated mathematical operations – instead, write a function to do the calculation, and update the code to use your new function.

    // The tax rate is 8%.
    const priceA = 100;
    const priceB = 250;
    const priceC = 70;

    // Refactor so the math is not repeated – write a function!
    // Adjust code below...
    const totalA = priceA + priceA * 0.08;
    const totalB = priceB + priceB * 0.08;
    const totalC = priceC + priceC * 0.08;
    
    console.log(totalA); // expected: 108
    console.log(totalB); // expected: 270
    console.log(totalC); // expected: 75.6
*/

// The tax rate is 8%.
const priceA = 100;
const priceB = 250;
const priceC = 70;

function addTax(price) {
	const total = price + price * 0.08;
	return total;
}

const totalA = addTax(priceA);
const totalB = addTax(priceB);
const totalC = addTax(priceC);
 
console.log(totalA); // expected: 108
console.log(totalB); // expected: 270
console.log(totalC); // expected: 75.6
