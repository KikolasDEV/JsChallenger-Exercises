/*
    Delete a property from an object
    Remove the age property from the person object using the delete operator.

    const person = { name: 'Alice', age: 30, city: 'London' };
    
    // Remove the 'age' property from the object below:
    
    console.log(person.age); // expected: undefined
*/

const person = { name: 'Alice', age: 30, city: 'London' };
 
delete person.age;
 
console.log(person.age); // expected: undefined