/*
    Replace for loop with Array.find() to Get Object by Property Value
    Refactor the code to replace the for loop with Array.prototype.find() so that foundUser is set to the first user in the users array whose id is 42.

    const users = [
      { id: 5, name: 'Alice' },
      { id: 42, name: 'Bob' },
      { id: 7, name: 'Charlie' }
    ];
    
    // Refactor code here //
    let foundUser = null;
    for (let i = 0; i < users.length; i++) {
      if (users[i].id === 42) {
        foundUser = users[i];
      }
    }
    ////////////////////////
    
    console.log(foundUser && foundUser.name); // Should log 'Bob'
*/

const users = [
  { id: 5, name: 'Alice' },
  { id: 42, name: 'Bob' },
  { id: 7, name: 'Charlie' }
];
 
const foundUser = users.find(user => user.id === 42);
 
console.log(foundUser && foundUser.name); // Should log 'Bob'