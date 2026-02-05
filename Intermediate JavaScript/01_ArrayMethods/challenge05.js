/*
    Find Attribute of First Active User
    Given an array of user objects with 'active' and 'name' properties, use the find method to locate the first user with active set to true 
    and assign their name to the variable firstActiveName.

    const users = [
      { name: 'Alice', active: false },
      { name: 'Bob', active: false },
      { name: 'Charlie', active: true },
      { name: 'Diana', active: true }
    ];
    // firstActiveName should be the name of the first user with active === true
    const firstActiveName = 
    console.log(firstActiveName);
*/

const users = [
  { name: 'Alice', active: false },
  { name: 'Bob', active: false },
  { name: 'Charlie', active: true },
  { name: 'Diana', active: true }
];

const firstActiveName = users.find(user => user.active).name;
console.log(firstActiveName);