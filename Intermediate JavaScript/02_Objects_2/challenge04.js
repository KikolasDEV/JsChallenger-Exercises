/*
    Language Greeting Selector
    Write a function getGreeting that takes a language code as input and returns the corresponding greeting from a predefined greetings object.
    Use dynamic property access to get the value from the object.
    If the language code does not exist in the object, return the default greeting 'Hello!'

    const greetings = {
      en: 'Hello!',
      es: '¡Hola!',
      fr: 'Bonjour!',
      jp: 'こんにちは!',
    };
    
    // Write a function 'getGreeting' that returns the greeting for a given language code
    // Use dynamic property access and return 'Hello!' if the code doesn't exist

    // Test cases:
    console.log(getGreeting('es')); // should be '¡Hola!'
    console.log(getGreeting('jp')); // should be 'こんにちは!'
    console.log(getGreeting('de')); // should be 'Hello!' (default)
*/

const greetings = {
  en: 'Hello!',
  es: '¡Hola!',
  fr: 'Bonjour!',
  jp: 'こんにちは!',
};
 
function getGreeting(language) {
	return greetings[language] || greetings.en;
}

// Test cases:
console.log(getGreeting('es')); // should be '¡Hola!'
console.log(getGreeting('jp')); // should be 'こんにちは!'
console.log(getGreeting('de')); // should be 'Hello!' (default)