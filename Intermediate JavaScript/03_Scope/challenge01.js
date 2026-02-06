/*
    Correctly access function result.
    Here, we have a function calculatePrice that calculates the total price of a product. 
    We execute that function and save the result in the variable total.
    But, the code will not work like this because we can not access the variable result from outside the function. 
    Correctly save the result of calculatePrice in the variable total.

    const price = 10;
    const quantity = 5;
    
    function calculatePrice() {
        const result = price * quantity;
        return result;
    };
    
    calculatePrice();
    const total = result;
    console.log(total);
    // expected output = 50
*/

const price = 10;
const quantity = 5;
 
function calculatePrice() {
    const result = price * quantity;
    return result;
};
 
const total = calculatePrice();
console.log(total);
// expected output = 50