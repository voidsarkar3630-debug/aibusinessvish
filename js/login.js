alert("login.js loaded");

const loginBtn = document.getElementById("loginBtn");

alert("Button Found: " + (loginBtn !== null));

loginBtn.addEventListener("click", () => {

const email = document.getElementById("email").value;
const password = document.getElementById("password").value;

alert(
"Email: " + email +
"\nPassword: " + password
);

});
