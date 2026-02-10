/*
    Input filter list
    In this challenge, we create a dynamic input filter with JavaScript. Extend the code below to interact with the displayed HTML elements. 
    Type a search term in the input field. The displayed items in the list should match your search term. The rest of the list elements should be hidden.

    const input = document.getElementById('input');
    input.addEventListener('input', () => {
      // type in your code here
    });
*/

const input = document.getElementById('input');

input.addEventListener('input', () => {
  const listItems = document.querySelectorAll('#list li');
  listItems.forEach(li => {
    if(li.innerText.includes(input.value)) return li.hidden = false;
    return li.hidden = true;
  })
});