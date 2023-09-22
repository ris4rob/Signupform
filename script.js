// Use external submit button with form
// Get references to the form and the external button
const signupForm = document.querySelector('.signupForm');
const createAccountBtn = document.querySelector('#externalSubmitBtn');
const inputs = document.querySelectorAll('input');
const errorMessages = document.querySelectorAll('.row-section p');
const password = document.querySelector('#password');
const confirmPassword = document.querySelector('#confirmPassword');
const passwordError = document.querySelector('.password-error');
const email = document.querySelector('#email');
const emailError = document.querySelector('.email-error');

// Add a click event listener to the external button
createAccountBtn.addEventListener('click', function (event) {
  // Prevent the default form submission behavior
  event.preventDefault();

  inputs.forEach(function (input, index) {
    if (input.value.trim() === '') {
      errorMessages[index].classList.add('error-message');
    } else {
      errorMessages[index].classList.remove('error-message');
    }
  });

  if (password.value !== confirmPassword.value) {
    passwordError.innerText = '* Password does not match';
    passwordError.classList.add('error-message');
  }

  if (!isValidEmail(email.value.trim())) {
    // Prevent the default alert message from appearing.
    event.preventDefault();
    emailError.innerText = '* Looks like this is not an email';
    emailError.classList.add('error-message');
  } else {
    emailError.classList.remove('error-message');
  }

  // Submit the form programmatically
  signupForm.submit();
});

function isValidEmail(email) {
  // Regular expression pattern to validate email format
  const emailRegex = /^\S+@\S+\.\S+$/;
  return emailRegex.test(email);
}

('* Looks like this is not an email');
