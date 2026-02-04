/*
    Get value from object
    The animal object has a property lifespan. Assign the value of this property to the variable lifespan.

    let lifespan;
    
    const animal = {
        species: 'Lion',
        habitat: 'Savannah',
        lifespan: 10,
        family: 'Felidae'
    };
    
    // assign object property here...
    lifespan = 
    
    console.log(`The Lion has a lifespan of ${lifespan} years`);
*/

let lifespan;
 
const animal = {
    species: 'Lion',
    habitat: 'Savannah',
    lifespan: 10,
    family: 'Felidae'
};
 
lifespan = animal.lifespan;
 
console.log(`The Lion has a lifespan of ${lifespan} years`);