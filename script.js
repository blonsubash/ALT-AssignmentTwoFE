//Login Page and Button
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
  } else if (
    document.loginForm.username.value === "aricalotIntern" &&
    document.loginForm.password.value === "TEST@123"
  ) {
    window.location.href = "homepage.html";
    document.loginForm.username.value = "";
    document.loginForm.password.value = "";
    document.getElementById("errorUsernameLogin").innerHTML = "";
    document.getElementById("errorPasswordLogin").innerHTML = "";
    document.getElementById("usernameBox").style.borderColor = "#e6e6e6";
    document.getElementById("passwordBox").style.borderColor = "#e6e6e6";
  } else {
    function checkUserAndPass() {
      var username = document.loginForm.username.value;
      var password = document.loginForm.password.value;
      var validUsername = "aricalotIntern";
      var validPassword = "TEST@123";
      if (username !== validUsername) {
        document.getElementById("errorUsernameLogin").innerHTML =
          "Username is incorrect";
        document.getElementById("usernameBox").style.borderColor = "red";
      }
      if (password !== validPassword) {
        document.getElementById("errorPasswordLogin").innerHTML =
          "Password is incorrect";
        document.getElementById("passwordBox").style.borderColor = "red";
      }
      // if (username !== validUsername && password !== validPassword) {
      //   console.log("Incorrect username and password");
      // }
    }
    checkUserAndPass();
  }
  return false;
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
  // checkEmail();

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
  // checkPassword();

  var checkEmailResult = checkEmail();
  var checkUsernameResult = checkUsername();
  var checkPasswordResult = checkPassword();

  if (checkEmailResult && checkUsernameResult && checkPasswordResult) {
    window.location.href = "loginpage.html";
    document.registerForm.email.value = "";
    document.registerForm.username.value = "";
    document.registerForm.password.value = "";
    document.getElementById("errorUsername").innerHTML = "";
    document.getElementById("errorEmail").innerHTML = "";
    document.getElementById("errorPassword").innerHTML = "";
    document.getElementById("emailBox").style.borderColor = "#e6e6e6";
    document.getElementById("usernameBox").style.borderColor = "#e6e6e6";
    document.getElementById("passwordBox").style.borderColor = "#e6e6e6";
  }

  // console.log("logged in");
  // if (
  //   document.registerForm.username.value === username &&
  //   document.registerForm.password.value !== "" &&
  //   document.registerForm.email.value !== ""
  // ) {
  //   window.location.href = "loginpage.html";
  // }

  return false;
}

// For Login password visibility icon
function passwordVisibility() {
  var imgShow = document.getElementById("passVisibility");
  var imgShow1 = document.getElementById("passVisibilityOpen");
  var char = document.getElementById("passwordBox");
  if (char.type === "text") {
    imgShow1.style.display = "block";
    imgShow.style.display = "none";
    char.type = "password";
  } else {
    imgShow1.style.display = "none";
    imgShow.style.display = "block";
    char.type = "text";
  }
}
function passwordVisibilityOpen() {
  var imgShow = document.getElementById("passVisibility");
  var imgShow1 = document.getElementById("passVisibilityOpen");
  var char = document.getElementById("passwordBox");
  if (char.type === "password") {
    imgShow1.style.display = "none";
    imgShow.style.display = "block";
    char.type = "text";
  } else {
    imgShow1.style.display = "block";
    imgShow.style.display = "none";
    char.type = "password";
  }
}
// For Register password visibility icon
function passwordVisibilityRegister() {
  var imgShow = document.getElementById("passVisibilityRegister");
  var imgShow1 = document.getElementById("passVisibilityOpenRegister");
  var char = document.getElementById("passwordBox");
  if (char.type === "text") {
    imgShow1.style.display = "block";
    imgShow.style.display = "none";
    char.type = "password";
  } else {
    imgShow1.style.display = "none";
    imgShow.style.display = "block";
    char.type = "text";
  }
}
function passwordVisibilityOpenRegister() {
  var imgShow = document.getElementById("passVisibilityRegister");
  var imgShow1 = document.getElementById("passVisibilityOpenRegister");
  var char = document.getElementById("passwordBox");
  if (char.type === "password") {
    imgShow1.style.display = "none";
    imgShow.style.display = "block";
    char.type = "text";
  } else {
    imgShow1.style.display = "block";
    imgShow.style.display = "none";
    char.type = "password";
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
if (document.getElementById("passVisibility")) {
  document
    .getElementById("passVisibility")
    .addEventListener("click", passwordVisibility);
}
if (document.getElementById("passVisibilityOpen")) {
  // document.getElementById("passVisibilityOpen").style.visibility = "hidden";
  document
    .getElementById("passVisibilityOpen")
    .addEventListener("click", passwordVisibilityOpen);
}
if (document.getElementById("passVisibilityRegister")) {
  document
    .getElementById("passVisibilityRegister")
    .addEventListener("click", passwordVisibilityRegister);
}
if (document.getElementById("passVisibilityOpenRegister")) {
  // document.getElementById("passVisibilityOpen").style.visibility = "hidden";
  document
    .getElementById("passVisibilityOpenRegister")
    .addEventListener("click", passwordVisibilityOpenRegister);
}
