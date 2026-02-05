/*
    Double Every Number with map()
    Use the map() function to create a new array, doubled, where each number from the numbers array is doubled. Make sure to use map() in your solution.

    const numbers = [1, 2, 3, 4, 5];
    const doubled = 
    console.log(doubled);
*/

const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(n => n * 2);
console.log(doubled);