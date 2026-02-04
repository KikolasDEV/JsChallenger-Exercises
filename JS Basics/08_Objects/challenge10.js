/*
    Add a Property to an Object
    Complete the addCountry function so that it adds a new property country to the given object, assigning it the provided value. 
    Use dot notation to add the property. The function should not return anything — it should modify the object directly.

    function addCountry(obj, value) {
      // add code below
    
    }
    
    const person = { name: "Martin" };
    addCountry(person, "Canada");
    console.log(person.country);
*/

function addCountry(obj, value) {
  obj.country = value;
}
 
const person = { name: "Martin" };
addCountry(person, "Canada");
console.log(person.country);