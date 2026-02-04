/*
    while loop
    In this exercise you will learn how to create a while loop. This loop is very similar to a for loop. 
    The syntax is while (condition) { statement }. It reads: As long as the condition is met, execute the statement. 
    It's basically an if statement that is repeated until the condition is no longer met.
    In the example below we execute a while loop. As long as the condition of the loop is met, num increases by 2 and i by 1. 
    Adjust the condition of the while loop so that the final value of num is 60.

    let num = 0;
    let i = 0;

    while ( i < 10 ) {
       num = num + 2;
       i = i + 1;
    }


    console.log(num);
    // exptected output = 60
*/

let num = 0;
let i = 0;

while ( i < 30 ) {
   num = num + 2;
   i = i + 1;
}


console.log(num);
// exptected output = 60