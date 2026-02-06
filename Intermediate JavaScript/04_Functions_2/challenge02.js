/*
    Change function parameters
    Remove or adjust the parameters of func so that the value of result will be 15.

    function func (a, b, ...c) {
      let sum = 0;
      for (let i = 0; i < c.length; i++) {
        sum = sum + c[i];
      }
      return sum;
    }
    
    const result = func(1,2,3,4,5);
    console.log(result);
*/

function func (...c) {
  let sum = 0;
  for (let i = 0; i < c.length; i++) {
    sum = sum + c[i];
  }
  return sum;
}
  
const result = func(1,2,3,4,5);
console.log(result);