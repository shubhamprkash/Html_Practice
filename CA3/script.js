
const userIdInput = document.getElementById('userId');
const passwordInput = document.getElementById('password');
const loginButton = document.getElementById('loginButton');
const errorMessage = document.getElementById('errorMessage');

loginButton.addEventListener('click', function(){  
    const userId = userIdInput.value;
  const password = passwordInput.value;

  if (!validateUserId(userId)) {
    errorMessage.style.display = 'block';
    errorMessage.innerHTML = 'Invalid username.';
    return;
  }

  if (!validatePassword(password)) {
    errorMessage.style.display = 'block';
    errorMessage.innerHTML = 'Invalid password.';
    return;
  }




function validateUserId(userId) {
    // if the user ID is a valid ID
    const idRegex = /^[0-9]+$/;
    if (idRegex.test(userId)) {
      return true;
    }
  
    //  if the user ID is a valid mobile number
    const mobileRegex = /^(\+)?[1-9]\d{9,12}$/;
    if (mobileRegex.test(userId)) {
      return true;
    }
  
    // if the user ID is a valid email ID
    const emailRegex = /^[a-zA-Z0-9.]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (emailRegex.test(userId)) {
      return true;
    }
  
    return false;
  }

  function validatePassword(password) {
    // at least 8 characters long
    if (password.length < 8) {
      return false;
    }
  
    // at least one alpha and one numeric character
    const alphaRegex = /[a-zA-Z]/;
    const numericRegex = /[0-9]/;
    if (!alphaRegex.test(password) || !numericRegex.test(password)) {
      return false;
    }
  
    // at least one capital letter
    const capitalLetterRegex = /[A-Z]/;
    if (!capitalLetterRegex.test(password)) {
      return false;
    }
 
    return true;
  }
  
  function onSuccessfulLogin() {
    window.location.href = '/home.html';
  }
  
  function onFailedLogin() {
    //  error message to the user
    const errorMessage = document.getElementById('errorMessage');
    errorMessage.style.display = 'block';
    errorMessage.innerHTML = 'Invalid username or password.';
  }


  function validate () {
    // Validate lowercase letters
    var myInput = document.getElementById("password");
    var flag1 = false;
    var flag2 = false;
    var flag3 = false;
    var flag4 = false;

    var lowerCaseLetters = /[a-z]/g;
    if (myInput.value.match(lowerCaseLetters)) {
      flag1=true;
    }

    // Validate capital letters
    var upperCaseLetters = /[A-Z]/g;
    if (myInput.value.match(upperCaseLetters)) {
      flag2=true;
    }
    // Validate numbers
    var numbers = /[0-9]/g;
    if (myInput.value.match(numbers)) {
      flag3=true;
    }
    // Validate length
    if (myInput.value.length >= 8) {
      flag4=true;
    }
    if (flag1 === true && flag2===true && flag3 === true && flag4===true) {
      window.location.href = "/home.html";
    } else {
      const errorMessage = document.getElementById("message");
      errorMessage.style.display = "block";
      errorMessage.innerHTML = "Invalid password.";
    }
  }
  