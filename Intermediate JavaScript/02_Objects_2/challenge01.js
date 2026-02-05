/*
    Access Object Property Dynamically
    Sometimes you don’t know the exact property name when writing code.
    In that case, you can use bracket notation to access a property dynamically using a string.
    Use the syntax obj[key] instead of obj.key.
    Write a function getProp that takes an object and a key (string), and returns the value of the matching property.
    Example: getProp({a: 42}, 'a') should return 42.

    // Use bracket notation: obj[key]
    // Complete the getProp function
    
    function getProp(obj, key) {
      // your code here
    
    }
    const testObj = { name: 'Alice', age: 25 };
    
    console.log(getProp(testObj, 'name')); // should log 'Alice'
    console.log(getProp(testObj, 'age'));  // should log 25
*/

function getProp(obj, key) {
    return obj[key];
}

const testObj = { name: 'Alice', age: 25 };
console.log(getProp(testObj, 'name')); // should log 'Alice'
console.log(getProp(testObj, 'age'));  // should log 25