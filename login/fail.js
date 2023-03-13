const forms = document.querySelectorAll('form');

forms.forEach(form => {
  form.addEventListener('submit', event => {
    const username = form.querySelector('input[name="username"]');
    const password = form.querySelector('input[name="password"]');
    const confirm_password = form.querySelector('input[name="confirm_password"]');

    if (password.value !== confirm_password.value) {
      event.preventDefault();
      alert('Passwords do not match!');
    } else {
      // If the passwords match, redirect to the appropriate page
      window.location.href = 'index.html'; // Change this to the URL of the success page
    }
  });
});