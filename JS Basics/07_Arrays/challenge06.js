/*
    Write function to get last element of an array
    Using what we learned earlier, let's write a generic function that returns the last element of an array we pass to it. 
    As you can see, we use that function to get the last element of both arrOne and arrTwo. But, the function is not complete yet. 
    Add what's missing to get the last element of any array we pass to it – you may need to use the Array.length property.

    const arrOne = [1, 2, 3, 4];
    const arrTwo = ['a', 'b', 3, 1, 'c'];


    const getLast = function (arr) {
       return arr[];
    }


    console.log(getLast(arrOne), getLast(arrTwo));
*/

const arrOne = [1, 2, 3, 4];
const arrTwo = ['a', 'b', 3, 1, 'c'];


const getLast = function (arr) {
   return arr[arr.length - 1];
}


console.log(getLast(arrOne), getLast(arrTwo));