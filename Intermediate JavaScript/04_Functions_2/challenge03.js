/*
    Tranform to arrow function
    Transform this function expression into an arrow function.

    const func = function (a) {
      const multiplier = 2;
      return a * multiplier;
    }
    
    const result = func(10);
    console.log(result);
*/

const func = a => {
  const multiplier = 2;
  return a * multiplier;
}
  
const result = func(10);
console.log(result);