/*
    Map: Conditionally Set a Property in Array of Objects
    Given an array of people objects, use map to create a new array where each object has a new property isAdult.
    isAdult should be true if age is 18 or older, and false otherwise. The resulting array should not modify the original objects.

    const people = [
      { name: 'Alice', age: 17 },
      { name: 'Bob', age: 22 },
      { name: 'Charlie', age: 18 }
    ];
    const peopleWithIsAdult = people.map(person => 
    console.log(peopleWithIsAdult);
*/

const people = [
  { name: 'Alice', age: 17 },
  { name: 'Bob', age: 22 },
  { name: 'Charlie', age: 18 }
];

const peopleWithIsAdult = people.map(person => ({ ...person, isAdult: person.age >= 18}));
console.log(peopleWithIsAdult);