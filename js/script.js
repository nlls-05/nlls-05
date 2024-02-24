const nameForm = document.getElementById('name-form');
const welcomeMessage = document.getElementById('welcome-message');

nameForm.addEventListener('submit', function (event) {
    event.preventDefault();
    
    const nameInput = document.getElementById('name');
    const name = nameInput.value.trim();

    if (name) {
        welcomeMessage.textContent = `Welcome to my website, ${name}!`;
        nameForm.reset();
    } else {
        alert('Please enter your name');
    }
});
