/*
    Fix Object Property Access: Replace Dot Notation with Bracket Notation
    The property name of the object is stored in a variable. 
    Refactor the code by replacing dot notation with bracket notation to correctly access the dynamic property value.

    const propName = "color";
    const car = { color: "red", brand: "Toyota" };
    
    // dot notation below does not work for dynamic access:
    // replace with bracket notation for dynamic property access
    const value = car.propName;
    
    console.log(value); // should print 'red'
*/

const propName = "color";
const car = { color: "red", brand: "Toyota" };
 
const value = car[propName];
 
console.log(value); // should print 'red'