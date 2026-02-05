/*
    Sum All Numbers in an Array
    Complete the function sumArray so that it returns the sum of all the numbers in the given array using the reduce method.

    const sumArray = (arr) => {
      // complete code here...
      return arr.reduce((sum,num) => 
    }
  
    const arr = [1, 2, 3, 4, 5];
    console.log(sumArray(arr));
*/

const sumArray = (arr) => {
  return arr.reduce((sum,num) => sum + num, 0);
}
 
const arr = [1, 2, 3, 4, 5];
console.log(sumArray(arr));