/*
    Map: Add a new property to each object
    Given an array of user objects, use map to create a new array where each user has a new property isActive set to true.

    const users = [
      { name: "Alice", age: 28 },
      { name: "Bob", age: 35 },
      { name: "Charlie", age: 22 }
    ];
    const updatedUsers =
    console.log(updatedUsers);
    console.log(updatedUsers.every(u => u.isActive === true));
*/

const users = [
  { name: "Alice", age: 28 },
  { name: "Bob", age: 35 },
  { name: "Charlie", age: 22 }
];

const updatedUsers = users.map(u => ({ ...u, isActive: true }));
console.log(updatedUsers);
console.log(updatedUsers.every(u => u.isActive === true));