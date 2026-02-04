/*
    Add a Property Based on Two Existing Properties
    Given an object with 'firstName' and 'lastName' properties, add a new property called 'fullName' whose value is the two properties joined with a space.

    const person = { firstName: 'Ada', lastName: 'Lovelace' };
    
    // Add a 'fullName' property below, combining firstName and lastName
    
    console.log(person.fullName); // expected: "Ada Lovelace"
*/

const person = { firstName: 'Ada', lastName: 'Lovelace' };

person.fullName = person.firstName + ' ' + person.lastName;

console.log(person.fullName); // expected: "Ada Lovelace"