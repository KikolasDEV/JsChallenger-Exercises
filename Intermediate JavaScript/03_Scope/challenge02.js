/*
    Correctly update global variable
    We want to use the function func to update the global variable x. But when we run the code, the value of global x is not updated. 
    Adjust the code so that the final value of global x is 2.

    let x = 1;
    
    function func() {
       let x = 'hello world';
       x = x + 1;
    };
    
    func();
    console.log(x);
    // expected output = 2
*/

let x = 1;
 
function func() {
    x = x + 1;
};
 
func();
console.log(x);
// expected output = 2