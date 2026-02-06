/*
    Create arrow function II
    Create an arrow function func. The block code that already exists expects two parameters x and arr. Declare them when you create the function.
    This exercise might look complicated at first glance, but you just have to apply what we have learnt about rest parameters and arrow functions.

    const func = 
      let result = [];
      for (let i = 0; i < arr.length; i++) {
        result.push(x + arr[i]);
      }
      return result;
    }
    
    // expected output: [11,12,13]
    console.log(func(10,1,2,3));
    // expected output: [5,6,7]
    console.log(func(2,3,4,5));
*/

const func = (x, ...arr) => {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(x + arr[i]);
  }
  return result;
}
 
// expected output: [11,12,13]
console.log(func(10,1,2,3));
// expected output: [5,6,7]
console.log(func(2,3,4,5));