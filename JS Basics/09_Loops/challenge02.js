/*
    for loop II - looping through an array
    Our second for-loop exercise shows how you can use a loop to iterate over the elements of an array. 
    In this example, we will filter numbers from an existing array. The loop iterates over each element of the array mixed. 
    If the current element is of type number, it will append it to the array newArray.
    To solve this task, complete the loop expressions inside the brackets.

    const mixed = [10,4,'c',6,'a',4];
    const newArray = [];

    for () {
       const current = mixed[i];
       if (typeof current === 'number') {
           newArray.push(current);
       }
    }


    console.log(newArray);
    // exptected output = [10,4,6,4]
*/

const mixed = [10,4,'c',6,'a',4];
const newArray = [];

for (let i = 0; i < mixed.length; i++) {
   const current = mixed[i];
   if (typeof current === 'number') {
       newArray.push(current);
   }
}


console.log(newArray);
// exptected output = [10,4,6,4]