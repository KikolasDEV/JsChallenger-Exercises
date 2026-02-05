/*
    Filter Active Users
    Given an array of user objects, return only those with isActive set to true using the filter() method.

    const users = [
      { name: 'Alice', isActive: true },
      { name: 'Bob', isActive: false },
      { name: 'Charlie', isActive: true },
      { name: 'Diana', isActive: false }
    ];
    const activeUsers = 
    console.log(activeUsers); // Should log only the objects with isActive: true
*/

const users = [
  { name: 'Alice', isActive: true },
  { name: 'Bob', isActive: false },
  { name: 'Charlie', isActive: true },
  { name: 'Diana', isActive: false }
];

const activeUsers = users.filter(u => u.isActive);
console.log(activeUsers); // Should log only the objects with isActive: true