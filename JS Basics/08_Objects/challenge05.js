/*
    Create Object from Function Parameters
    Write a function makePerson that takes name and age as parameters, and returns an object with properties name and age set to the corresponding argument values.
    Example: makePerson('Alice', 30) should return { name: 'Alice', age: 30 }.

    function makePerson(name, age) {
      // complete function below...
    
    }
    
    const bob = makePerson('Bob', 25);
    console.log(bob.name === 'Bob' && bob.age === 25);
    
    const charlie = makePerson('Charlie', 43);
    console.log(charlie.name === 'Charlie' && charlie.age === 43);
*/

function makePerson(name, age) {
    const person = {
		name: name,
		age: age
	};
	return person;
}
 
const bob = makePerson('Bob', 25);
console.log(bob.name === 'Bob' && bob.age === 25);
 
const charlie = makePerson('Charlie', 43);
console.log(charlie.name === 'Charlie' && charlie.age === 43);