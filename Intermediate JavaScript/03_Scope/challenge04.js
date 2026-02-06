/*
    Sum global and local variable
    Adjust the code so that result is the sum of x and the block version of y.

    const x = 10;
    const y = 2;
    let result = 0;
    {
       const y = 15;
    }
    result = x + y;
    console.log(result);
    // expected output = 25
*/

const x = 10;
const y = 2;
let result = 0;
{
   const y = 15;
   result = x + y;
}
console.log(result);
// expected output = 25