/*
    Create a JavaScript array using variables
    You can put any value inside an array. Here, the array named arr even contains another array. You can also insert values from other variables into the array.
    Insert the value of the variable string into the arr. Insert it in the right place so that the console.log() statement logs true.

    const string = 'hello';
    const arr = ['a', [1, 2, 3]];


    console.log(arr.length === 3 && arr[1] === string);
*/

const string = 'hello';
const arr = ['a', string, [1, 2, 3]];

console.log(arr.length === 3 && arr[1] === string);

 