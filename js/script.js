// Get the popup and close button
const welcomePopup = document.getElementById('welcomePopup');
const closePopup = document.getElementById('closePopup');

// Show the popup when the page loads
document.addEventListener('DOMContentLoaded', () => {
  welcomePopup.classList.add('active');
});

// Close the popup when the button is clicked
closePopup.addEventListener('click', () => {
  welcomePopup.classList.remove('active');
});
 // Show after 1 seconds
setTimeout(() => {
    welcomePopup.classList.add('active');
  }, 1000);  