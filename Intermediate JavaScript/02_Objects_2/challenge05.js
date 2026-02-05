/*
    Student Grades Lookup
    Given an object of students and their grades, write a function that takes a student's name and returns 'Pass' if the grade is above 60, otherwise 'Fail'. 
    Use dynamic property access with the student's name variable.

    // students object and function signature provided
    const students = {
      Alice: 69,
      Bob: 58,
      Charlie: 90,
    };

    // Complete the function using dynamic property access (i.e. bracket notation)
    function checkGrade(name) {
      // add code here...
    
    }

    console.log(checkGrade('Alice')); // 'Pass'
    console.log(checkGrade('Bob')); // 'Fail'
    console.log(checkGrade('Charlie')); // 'Pass'
*/

// students object and function signature provided
const students = {
  Alice: 69,
  Bob: 58,
  Charlie: 90,
};

// Complete the function using dynamic property access (i.e. bracket notation)
function checkGrade(name) {
    return students[name] > 60 ? 'Pass' : 'Fail';
}

console.log(checkGrade('Alice')); // 'Pass'
console.log(checkGrade('Bob')); // 'Fail'
console.log(checkGrade('Charlie')); // 'Pass'