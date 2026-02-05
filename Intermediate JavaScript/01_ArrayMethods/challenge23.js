/*
    Refactor a for loop to use Array.forEach()
    Rewrite the code to use Array.forEach() instead of a for loop to print each fruit to the console.

    const fruits = ['apple', 'banana', 'cherry'];
    
    // Rewrite the following logic using forEach() //
    for (let i = 0; i < fruits.length; i++) {
      console.log(fruits[i]);
    }
    //////////////////////////////////////////////////////
*/

const fruits = ['apple', 'banana', 'cherry'];
 
fruits.forEach(fruit => console.log(fruit));