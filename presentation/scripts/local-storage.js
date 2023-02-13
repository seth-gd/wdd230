// Create constant variables to hold the input field, the span, and the three buttons.
// <input>
const nameField = document.getElementById('name-field');
// <span>
const userName = document.getElementById('user-name');
// Three <button> elements
const saveName = document.getElementById('save-name');
const showName = document.getElementById('show-name');
const deleteName = document.getElementById('delete-name');

// Save Name button
saveName.addEventListener('click', () => {
    // Create a constant to hold the value of the input field.
    const nameValue = nameField.value;

    // Set the name value as an item in localStorage with a key named 'username'.
    localStorage.setItem('username', nameValue);

    // Clear the input field.
    nameField.value = '';
});

// Show Name Button
showName.addEventListener('click', () => {
    // Show the name by getting the name value from localStorage
    userName.textContent = localStorage.getItem('username');
});

// Delete Name button
deleteName.addEventListener('click', () => {
    // Remove 'username' from localStorage.
    localStorage.removeItem('username');
    userName.textContent = '';
});