document.addEventListener('DOMContentLoaded', function() {
  const loginForm = document.getElementById('loginForm');
  const signupForm = document.getElementById('signupForm');
  const loginLink = document.getElementById('loginLink');
  const signupLink = document.getElementById('signupLink');

  loginLink.addEventListener('click', function(event) {
    event.preventDefault();
    loginForm.classList.remove('hidden');
    signupForm.classList.add('hidden');
  });

  signupLink.addEventListener('click', function(event) {
    event.preventDefault();
    loginForm.classList.add('hidden');
    signupForm.classList.remove('hidden');
  });

  signupForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    const modalContent = `
      <div class="modal">
        <div class="modal-content">
          <span class="close">&times;</span>
          <h2>These are the data from the Sign Up Form. Thank you!</h2>
          <p><strong>First Name:</strong> ${firstName}</p>
          <p><strong>Last Name:</strong> ${lastName}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Password:</strong> ${password}</p>
        </div>
      </div>
    `;

    document.body.insertAdjacentHTML('beforeend', modalContent);

    const closeButton = document.querySelector('.close');
    closeButton.addEventListener('click', function() {
      const modal = document.querySelector('.modal');
      modal.parentElement.removeChild(modal);
    });
  });
});
