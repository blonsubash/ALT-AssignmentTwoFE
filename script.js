function clearError(errorContentId, inputId) {
  document.getElementById(`${errorContentId}`).innerHTML = "";
  document.getElementById(`${inputId}`).style.borderColor = "#e6e6e6";
}

//Login Page and Button
function validateLoginForm(e) {
  e.preventDefault();

  function setError(errorType, message) {
    switch (errorType) {
      case "username":
        document.getElementById("errorUsernameLogin").innerHTML = `${message}`;
        document.getElementById("usernameBox").style.borderColor = "red";
        break;

      case "password":
        document.getElementById("errorPasswordLogin").innerHTML = `${message}`;
        document.getElementById("passwordBox").style.borderColor = "red";
        break;
    }
  }

  if (
    document.loginForm.username.value == "" &&
    document.loginForm.password.value == ""
  ) {
    setError("username", "Username is empty");
    setError("password", "Password is empty");
  } else if (document.loginForm.username.value == "") {
    setError("username", "Username is empty");
  } else if (document.loginForm.password.value == "") {
    setError("password", "Password is empty");
  } else if (
    document.loginForm.username.value === "aricalotIntern" &&
    document.loginForm.password.value === "TEST@123"
  ) {
    window.location.href = "homepage1.html";
    document.loginForm.username.value = "";
    document.loginForm.password.value = "";
    clearError("errorUsernameLogin", "usernameBox");
    clearError("errorPasswordLogin", "passwordBox");
  } else {
    var username = document.loginForm.username.value;
    var password = document.loginForm.password.value;
    var validUsername = "aricalotIntern";
    var validPassword = "TEST@123";
    if (username !== validUsername) {
      setError("username", "Username is incorrect");
    }
    if (password !== validPassword) {
      setError("password", "Password is incorrect");
    }
  }
}
//Register Button
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
      return true;
    } else {
      document.getElementById("errorEmail").innerHTML = "Email is incorrect";
      document.getElementById("emailBox").style.borderColor = "red";
      return false;
    }
  }

  function checkUsername() {
    if (document.registerForm.username.value == "") {
      document.getElementById("errorUsername").innerHTML =
        "Username must be filled";
      document.getElementById("usernameBox").style.borderColor = "red";
    } else {
      return true;
    }
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
      return true;
    } else {
      document.getElementById(
        "errorPassword"
      ).innerHTML = `Password must contain  one number,one lower case, one upper case,one special and at least 8 characters.`;
    }
  }
  var checkEmailResult = checkEmail();
  var checkUsernameResult = checkUsername();
  var checkPasswordResult = checkPassword();

  if (checkEmailResult && checkUsernameResult && checkPasswordResult) {
    window.location.href = "loginpage.html";
    document.registerForm.email.value = "";
    document.registerForm.username.value = "";
    document.registerForm.password.value = "";
    clearError("errorUsername", "usernameBox");
    clearError("errorEmail", "emailBox");
    clearError("errorPassword", "passwordBox");
  }
}

function tooglePasswordIcon() {
  var closeEyeIcon = document.getElementById("closeEyeIcon");
  var openEyeIcon = document.getElementById("openEyeIcon");
  var inputField = document.getElementById("passwordBox");

  if (inputField.type === "text") {
    closeEyeIcon.style.display = "block";
    openEyeIcon.style.display = "none";
    inputField.type = "password";
  } else {
    closeEyeIcon.style.display = "none";
    openEyeIcon.style.display = "block";
    inputField.type = "text";
  }
}

// Documents Elements
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

if (document.getElementById("openEyeIcon")) {
  document.getElementById("openEyeIcon").addEventListener("click", function () {
    tooglePasswordIcon();
  });
}

if (document.getElementById("closeEyeIcon")) {
  document
    .getElementById("closeEyeIcon")
    .addEventListener("click", function () {
      tooglePasswordIcon();
    });
}
