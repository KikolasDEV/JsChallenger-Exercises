/*
    Refactor a For Loop Using map()
    Refactor the code to use the array map() function instead of the for loop to create a new array containing the squares of each number.

    const nums = [2, 4, 6, 8];
    
    // refactor code here //
    let squares = [];
    for (const num of nums) {
      squares.push(num**2)
    }
    ////////////////////////
    
    // The result should be: [4, 16, 36, 64]
    console.log(squares);
*/

const nums = [2, 4, 6, 8];
 
const squares = nums.map(n => n * n);
 
console.log(squares);