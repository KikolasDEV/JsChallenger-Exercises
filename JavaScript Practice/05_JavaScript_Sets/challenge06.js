/*
    Add multiple elements to Set
    Write a function that takes a Set and an array as arguments. 
    If not already existing, add each element in the array to the Set. Return the modified Set

    function myFunction(set, arr) {
       return 
    }
    
    console.log(myFunction(new Set([1, 2, 3]), [4, 5, 6]))
    // expected: Set(6) { '1', '2', '3', '4', '5', '6' }
    console.log(myFunction(new Set('12345'), [...'6789']))
    // expected: Set(9) { '1', '2', '3', '4', '5', '6', '7', '8', '9' }
    console.log(myFunction(new Set([1, 2, 3]), [2, 3]))
    // expected: Set(3) { '1', '2', '3' }
*/

function myFunction(set, arr) {
   arr.forEach((e) => set.add(e));
   return set;
}
 
console.log(myFunction(new Set([1, 2, 3]), [4, 5, 6]))
// expected: Set(6) { '1', '2', '3', '4', '5', '6' }
console.log(myFunction(new Set('12345'), [...'6789']))
// expected: Set(9) { '1', '2', '3', '4', '5', '6', '7', '8', '9' }
console.log(myFunction(new Set([1, 2, 3]), [2, 3]))
// expected: Set(3) { '1', '2', '3' }