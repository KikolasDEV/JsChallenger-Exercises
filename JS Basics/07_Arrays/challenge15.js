/*
    Replace Array Element at Index
    You are given an array and must replace the element at a specific index with a new value. Complete the function so that it returns the updated array.

    // Replace the value at index i of arr with val and return updated array
    function updateAtIndex(arr, i, val) {
      // add code here...
    
    }
    
    console.log(updateAtIndex([10, 20, 30, 40], 2, 99)); // [10, 20, 99, 40]
    console.log(updateAtIndex([1, 2, 3], 0, 42)); // [42, 2, 3]
    console.log(updateAtIndex([5], 0, 100)); // [100]
*/

function updateAtIndex(arr, i, val) {
    arr[i] = val;
    return arr;
}
  
console.log(updateAtIndex([10, 20, 30, 40], 2, 99)); // [10, 20, 99, 40]
console.log(updateAtIndex([1, 2, 3], 0, 42)); // [42, 2, 3]
console.log(updateAtIndex([5], 0, 100)); // [100]