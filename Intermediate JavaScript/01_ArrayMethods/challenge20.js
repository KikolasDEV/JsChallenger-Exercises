/*
    Sum All Even Numbers in an Array Using forEach
    Given an array of numbers, use forEach to sum all the even numbers in the array. Use the % (modulo) operator to check if a number is even.

    const arr = [1, 4, 7, 10, 22, 11];
    let sum = 0;
    arr.forEach(num => {
    });
    console.log(sum);
*/

const arr = [1, 4, 7, 10, 22, 11];
let sum = 0;
arr.forEach(num => { 
    if(num % 2 == 0) {
        sum += num 
    } 
});
console.log(sum);