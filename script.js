let username = document.getElementById("username");
let email = document.querySelector("#email");
let password = document.querySelector("#password");
let password2 = document.querySelector("#password2");
let form = document.querySelector("form");
let error = document.getElementsByTagName("small")[0];
let error2 = document.getElementsByTagName("small")[1];
let error3 = document.getElementsByTagName("small")[2];
let error4 = document.getElementsByTagName("small")[3];
error.innerText = "";
error.style = "color:#e74c3c";

function usernameValid(username) {
  if (username.value.length >= 3) {
    username.style = "border:2px solid #2ecc71";
    localStorage.setItem("username", username.value);
  } else {
    username.style = "border:2px solid #e74c3c";
    error.innerText = "Username must have be at least 3 characters!";
    setTimeout(() => {
      error.innerText = "";
    }, 3000);
  }
}

error2.innerText = "";
error2.style = "color:#e74c3c";
function emailValid(email) {
  const testEmail =
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (email.value.match(testEmail)) {
    email.style = "border:2px solid #2ecc71";
    localStorage.setItem("email", email.value);
  } else {
    email.style = "border:2px solid #e74c3c";
    error2.innerText = "Email is not Valid!";
    setTimeout(() => {
      error2.innerText = "";
    }, 3000);
  }
}
error3.innerText = "";
error3.style = "color:#e74c3c";
function passwordValid(password) {
  if (password.value.length >= 3) {
    password.style = "border:2px solid #2ecc71";
    localStorage.setItem("password", password.value);
  } else {
    password.style = "border:2px solid #e74c3c";
    error3.innerText = "Password must have be at least 3 characters!";
    setTimeout(() => {
      error3.innerText = "";
    }, 3000);
  }
}
error4.innerText = "";
error4.style = "color:#e74c3c";
function password2Valid(password2) {
  if (password2.value === password.value && password2.value.length >= 1) {
    password2.style = "border:2px solid #2ecc71";
    localStorage.setItem("password2", password2.value);
  } else {
    password2.style = "border:2px solid #e74c3c";
    error4.innerText = "Passzord don't match";
    setTimeout(() => {
      error4.innerText = "";
    }, 3000);
  }
}
let nav = document.querySelector("nav");

window.addEventListener("scroll", () => {
  const scrollPosition = parseInt(document.documentElement.scrollTop);
  if (scrollPosition >= 60) {
    nav.style =
      "position: fixed; top: 0; right: 0; left: 0; background-color: white;padding: 20px;";
  } else {
    nav.style =
      "position:; top: 0; right: 0; left: 0; background-color:;padding:;";
  }
  console.log(scrollPosition);
});

form.addEventListener("submit", (even) => {
  even.preventDefault();
  usernameValid(username);
  emailValid(email);
  passwordValid(password);
  password2Valid(password2);
});
