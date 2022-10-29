
async function loginFormHandler(event) {
  event.preventDefault();

  const password = document.querySelector("#password-login").value.trim();
  const username = document.querySelector("#username-login").value.trim();

  if (username && password) {
    const response = await fetch("/api/users/login", {
      method: "POST",
      body: JSON.stringify({
        username,
        email,
        password,
      }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("homepage");
    } else {
      alert(response.statusText);
    }
  }
}
document
  .querySelector(".form-login-form")
  .addEventListener("submit", loginFormHandler);

//async function signupFormHandler(event) {
//  event.preventDefault();
//
//  const username = document.querySelector("#username-signup").value.trim();
//  const email = document.querySelector("#email-signup").value.trim();
//  const password = document.querySelector("#password-signup").value.trim();
//
//  if (username && email && password) {
//    const response = await fetch("/api/users", {
 //     method: "POST",
//     body: JSON.stringify({
 //username,
 //       email,
//        password,
//      }),
//      headers: { "Content-Type": "application/json" },
  //  });
//
//    if (response.ok) {
//      document.location.replace("/homepage");
 //   } else {
 //     response.json().then((result) => {
 //       alert(result.errors[0].message);
//      });
 //   }
//  }
//}
//
//  .querySelector(".login-form")
 // .addEventListener("submit", loginFormHandler);

//document
//  .querySelector(".signup-form")
 // .addEventListener("submit", signupFormHandler);

// Copied from activity activity 24
//const loginFormHandler = async (event) => {
  // Stop the browser from submitting the form so we can do so with JavaScript
 // event.preventDefault();

  // Gather the data from the form elements on the page
  //const email = document.querySelector('#email-login').value.trim();
  //const password = document.querySelector('#password-login').value.trim();

  //if (email && password) {
    // Send the e-mail and password to the server
   // const response = await fetch('/api/users/login', {
  //    method: 'POST',
  //    body: JSON.stringify({ email, password }),
   //   headers: { 'Content-Type': 'application/json' },
   // });
//
   // if (response.ok) {
  //    document.location.replace('/');
  //  } else {
  //    alert('Failed to log in');
  //  }
 // }
//};

//document
//  .querySelector('.login-form')
//  .addEventListener('submit', loginFormHandler);


// const loginFormHandler = async (event) => {
//   event.preventDefault();

//   const email = document.querySelector('#email-login').value.trim();
//   const password = document.querySelector('#password-login').value.trim();

//   if (email && password) {
//     const response = await fetch('/api/users/login', {
//       method: 'POST',
//       body: JSON.stringify({ email, password }),
//       headers: { 'Content-Type': 'application/json' },
//     });

//     if (response.ok) {
//       document.location.replace('/');
//     } else {
//       alert('Failed to log in.');
//     }
//   }
// };

// const signupFormHandler = async (event) => {
//   event.preventDefault();

//   const username = document.querySelector('#username-signup').value.trim();
//   const email = document.querySelector('#email-signup').value.trim();
//   const password = document.querySelector('#password-signup').value.trim();

//   if (username && email && password) {
//     const response = await fetch('/api/user', {
//       method: 'POST',
//       body: JSON.stringify({ username, email, password }),
//       headers: { 'Content-Type': 'application/json' },
//     });

//     if (response.ok) {
//       document.location.replace('/');
//     } else {
//       alert('Failed to sign up.');
//     }
