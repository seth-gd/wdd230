// Create three variables to hold the input field, the button, and the unordered list.
const input = document.getElementById('favchap');
const button = document.getElementById('addchap');
const list = document.getElementById('list');

// Add an event listener to button with an anonymous function.
button.addEventListener('click', () => {

    // If the input field is empty, do nothing.
    if (input.value != '') {
        // Create a constant that holds the input field's value.
        const chapter = input.value;

        // Create an li, a span, and a button to add to the ul.
        const listItem = document.createElement('li');
        const listText = document.createElement('span');
        const listBtn = document.createElement('button');
    
        // Have the li display the value of the constant `chapter`.
        listItem.appendChild(listText);
        listText.textContent = chapter;
    
        // Append the button to the li. Have the button display an X.
        listItem.appendChild(listBtn);
        listBtn.textContent = '❌';
    
        // Append the li to the ul.
        list.appendChild(listItem);
    
        // Add an event listener to the X button to delete the li.
        listBtn.addEventListener('click', () => {
            list.removeChild(listItem);
        });
    
        // Clear the input field and put focus on it.
        input.value = '';
        input.focus();
    }
});