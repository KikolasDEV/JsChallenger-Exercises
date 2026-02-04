/*
    Swap Two Elements in an Array
    You have an array of fruit. Swap the first and last elements of the array so that the array begins with 'pear' and ends with 'apple'.

    const fruits = ['apple', 'banana', 'pear'];
    
    // swap the first and last elements
    
    console.log(fruits);
    console.log(fruits[0] === 'pear' && fruits[2] === 'apple');
*/

const fruits = ['apple', 'banana', 'pear'];
fruits[0] = "pear";
fruits[2] = "apple";
 
console.log(fruits);
console.log(fruits[0] === 'pear' && fruits[2] === 'apple');