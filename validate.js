document.getElementById('signupForm').addEventListener('submit', function (event) {
  // Prevent page refresh
  event.preventDefault();

  // Clear previous errors
  document.getElementById('nameError').textContent = '';
  document.getElementById('emailError').textContent = '';
  document.getElementById('passwordError').textContent = '';

  let isValid = true;

  // 1. Name Validation
  const username = document.getElementById('username').value.trim();
  if (username === '') {
    document.getElementById('nameError').textContent = 'Name is required.';
    isValid = false;
  }

  // 2. Email Validation (RegEx)
  const email = document.getElementById('email').value.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    document.getElementById('emailError').textContent = 'Enter a valid email address.';
    isValid = false;
  }

  // 3. Password Validation
  const password = document.getElementById('password').value;
  if (password.length < 6) {
    document.getElementById('passwordError').textContent = 'Password must be at least 6 characters.';
    isValid = false;
  }

  // If all fields are valid
  if (isValid) {
    alert('Form submitted successfully!');
    this.reset();
  }
});