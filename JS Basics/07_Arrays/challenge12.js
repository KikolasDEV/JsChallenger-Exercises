/*
    Find the Chocolate's Position
    You have a box of assorted chocolates. Use the indexOf method to find the position of your favorite flavor in the box and store it in a variable called position.

    const chocolates = ['mint','caramel','hazelnut','fruit','truffle'];
    const favorite = 'hazelnut';
    
    // Use indexOf to find favorite's position.
    // Store the position in the variable 'position'.
    
    const position;
    
    console.log(position); // should log 2
    console.log(position === 2);
*/

const chocolates = ['mint','caramel','hazelnut','fruit','truffle'];
const favorite = 'hazelnut';
 
const position = chocolates.indexOf(favorite);
 
console.log(position); // should log 2
console.log(position === 2);