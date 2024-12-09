// Select the button and message elements
const button = document.getElementById('changeText');
const message = document.getElementById('message');

// Add an event listener to the button
button.addEventListener('click', () => {
  message.textContent = "You clicked the button!";
  button.textContent = "Clicked!";
});
