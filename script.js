// Use external submit button with form
// Get references to the form and the external button
const signupForm = document.querySelector('.signupForm');
const createAccountBtn = document.querySelector('#externalSubmitBtn');
const inputs = document.querySelectorAll('input');
const errorMessages = document.querySelectorAll('.row-section p');
const password = document.querySelector('#password');
const confirmPassword = document.querySelector('#confirmPassword');

// Add a click event listener to the external button
createAccountBtn.addEventListener('click', function (event) {
  // Prevent the default form submission behavior
  event.preventDefault();

  inputs.forEach(function (input, index) {
    if (input.value.trim() === '') {
      errorMessages[index].classList.add('error-message');
    }
  });

  // Submit the form programmatically
  signupForm.submit();
});
