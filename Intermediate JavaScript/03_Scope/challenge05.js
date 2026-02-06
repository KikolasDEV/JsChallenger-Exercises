/*
    Correctly update global variable from within block
    Adjust the code such that the logged value of x is 30.

    let x = 10;
    {
       let x = 30;
    }
    console.log(x);
    // expected output = 30
*/

let x = 10;
{
   x = 30;
}
console.log(x);
// expected output = 30