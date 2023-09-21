// Use external submit button with form
// Get references to the form and the external button
const signupForm = document.getElementById('signupForm');
const createAccountBtn = document.getElementById('externalSubmitBtn');

// Add a click event listener to the external button
createAccountBtn.addEventListener('click', function (event) {
  // Prevent the default form submission behavior
  event.preventDefault();

  // Submit the form programmatically
  signupForm.submit();
});
