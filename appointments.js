// Get the form element
const form = document.querySelector("form");

// Add submit event listener to the form
form.addEventListener("submit", validateForm);

// Validation function
function validateForm(event) {
  // Prevent form submission
  event.preventDefault();

  // Get the input values
  const emailInput = document.getElementById("patientEmail");
  const phoneInput = document.getElementById("patientPhone");

  // Get the error message elements
  const emailError = document.getElementById("emailError");
  const phoneError = document.getElementById("phoneError");

  // Validate email input
  if (!validateEmail(emailInput.value)) {
    emailError.innerText = "Please enter a valid email address";
    emailInput.classList.add("error");
  } else {
    emailError.innerText = "";
    emailInput.classList.remove("error");
  }

  // Validate phone input
  if (!validatePhone(phoneInput.value)) {
    phoneError.innerText = "Please enter a valid phone number";
    phoneInput.classList.add("error");
  } else {
    phoneError.innerText = "";
    phoneInput.classList.remove("error");
  }

  // Check if the form is valid
  if (validateEmail(emailInput.value) && validatePhone(phoneInput.value)) {
    // Form is valid, submit it
    form.submit();
  }
}

// Email validation function
function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Phone validation function
function validatePhone(phone) {
  const phoneRegex = /^\d{10}$/;
  return phoneRegex.test(phone);
}
