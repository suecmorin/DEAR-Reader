
  const email = document.querySelector('#email-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();

  const createFormHandler = async (event) => {
    event.preventDefault();
  
//write email and password to user file?
  if (email && password) {
    const response = await fetch('/api/users', {
        method: 'POST',
        body:JSON.stringify({ email, password }),
        headers: {'Content-Type': 'application/json' },
    });
  
    if (response.ok) {
      document.location.replace('/login');
    } else {
      alert('Failed to create account');
    }
  }
};

document
  .querySelector('.create-form')
  .addEventListener('submit', createFormHandler);