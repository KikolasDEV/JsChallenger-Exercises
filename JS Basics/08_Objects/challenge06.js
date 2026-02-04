/*
    Create an Object with Conditional Properties
    Write a function makeUser that takes two parameters, name and age, and returns an object with the following properties:
    - name (always included)
    - isAdult (true if age is 18 or above, false otherwise)
    Do not just assign parameters directly—use logic to set isAdult.

    // Complete the makeUser function to return an object with name & isAdult properties
    function makeUser(name, age) {
      // your code here
    
    }
    const user1 = makeUser('Alice', 20);
    const user2 = makeUser('Bob', 15);
    console.log(user1); // { name: 'Alice', isAdult: true }
    console.log(user2); // { name: 'Bob', isAdult: false }
*/

function makeUser(name, age) {
	const isAdult = age >= 18 ? true : false;
	const person = {
		name: name,
		isAdult: isAdult 
	};
	return person;
}

/*
function makeUser(name, age) {
  return {
    name: name,
    isAdult: age >= 18
  };
}
*/

const user1 = makeUser('Alice', 20);
const user2 = makeUser('Bob', 15);
console.log(user1); // { name: 'Alice', isAdult: true }
console.log(user2); // { name: 'Bob', isAdult: false }