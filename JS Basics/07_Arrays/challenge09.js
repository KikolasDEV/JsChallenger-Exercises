/*
    Change an Array Element by Index
    You can change any value inside an array by assigning a new value to a specific index. 
    In this challenge, update the second element of the array to the string 'JavaScript' so that both test cases log true.

    const languages = ['Python', 'Ruby', 'C++'];
    
    // Set the second element to 'JavaScript'
    
    console.log(languages[1] === 'JavaScript');
    console.log(languages.length === 3);
*/

const languages = ['Python', 'Ruby', 'C++'];
languages[1] = 'JavaScript';
 
console.log(languages[1] === 'JavaScript');
console.log(languages.length === 3);
 