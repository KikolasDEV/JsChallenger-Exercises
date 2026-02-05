/*
    Keep Only Values Found in Both Arrays
    Given two arrays. Use the filter method to return only the elements from arr1 that are also present in arr2.

    const arr1 = [1, 2, 3, 4, 5, 6];
    const arr2 = [2, 4, 6, 8];
    const filtered = 
    console.log(filtered);
*/

const arr1 = [1, 2, 3, 4, 5, 6];
const arr2 = [2, 4, 6, 8];
const filtered = arr1.filter(n => arr2.includes(n));
console.log(filtered);