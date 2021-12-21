function validateLoginForm(e) {
  e.preventDefault();
  if (
    document.loginForm.username.value == "" &&
    document.loginForm.password.value == ""
  ) {
    document.getElementById("errorUsernameLogin").innerHTML =
      "Username is empty";
    document.getElementById("usernameBox").style.borderColor = "red";
    document.getElementById("errorPasswordLogin").innerHTML =
      "Password is empty";
    document.getElementById("passwordBox").style.borderColor = "red";
  } else if (document.loginForm.username.value == "") {
    document.getElementById("errorUsernameLogin").innerHTML =
      "Username is empty";
    document.getElementById("usernameBox").style.borderColor = "red";
  } else if (document.loginForm.password.value == "") {
    document.getElementById("errorPasswordLogin").innerHTML =
      "Password is empty";
    document.getElementById("passwordBox").style.borderColor = "red";
  }

  return false;
}

function validateRegisterForms(e) {
  e.preventDefault();
  if (document.registerForm.email.value == "") {
    document.getElementById("errorEmail").innerHTML = "Email must be filled";
    document.getElementById("emailBox").style.borderColor = "red";
  }
  function checkEmail() {
    var email = document.getElementById("emailBox");
    var validationemail = /\S+@\S+\.\S+/;
    if (email.value.match(validationemail)) {
    } else {
      document.getElementById("errorEmail").innerHTML = "Email is incorrect";
    }
  }
  checkEmail();

  if (document.registerForm.username.value == "") {
    document.getElementById("errorUsername").innerHTML =
      "Username must be filled";
    document.getElementById("usernameBox").style.borderColor = "red";
  }
  if (document.registerForm.password.value == "") {
    document.getElementById("errorPassword").innerHTML =
      "Password must be filled";
    document.getElementById("passwordBox").style.borderColor = "red";
  }
  function checkPassword() {
    var pass = document.getElementById("passwordBox");
    var validationCharacters =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
    if (pass.value.match(validationCharacters)) {
    } else {
      document.getElementById(
        "errorPassword"
      ).innerHTML = `Password must contain  one number,one lower case, one upper case,one special and at least 8 characters.`;
    }
  }
  checkPassword();
  return false;
}

if (document.getElementById("loginBtn")) {
  document
    .getElementById("loginBtn")
    .addEventListener("click", validateLoginForm);
}
if (document.getElementById("registerBtn")) {
  document
    .getElementById("registerBtn")
    .addEventListener("click", validateRegisterForms);
}
