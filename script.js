var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var lowerChkbx = document.querySelector("#char-lower").checked;
  var upperChkbx = document.querySelector("#char-upper").checked;
  var numberChkbx = document.querySelector("#char-number").checked;
  var specialChkbx = document.querySelector("#char-special").checked;

  var passwordLength = parseInt(document.getElementById("char-input").value);
  if (!passwordLength) {
    return "Please select a valid number ranging from 8 to 128.";
  }
  //while loop says, while isNan(true), or passwordLength <8 === true, or >128 ===true the while loop will contiue showing alert and then prompt. User will not exit loop until all inputs are false.
  while (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    window.alert("Please enter a valid number!");
    passwordLength = prompt(
      "Enter the length of password, with at least 8 characters and no more than 128."
    );
  }
  // empty charset string is added to as the the user hits okay on confirms.
  var charset = "";

  if (lowerChkbx) {
    charset += "abcdefghijklmnopqrstuvwxyz";
  }
  if (upperChkbx) {
    charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  if (numberChkbx) {
    charset += "0123456789";
  }
  if (specialChkbx) {
    charset += "!#$%&'()*+,-.:;<=>?@[]^_`{|}~";
  }
  // used to validate at least one character set was selected to continue
  if (charset === "") {
    return "Please select at least one character set.";
  }

  // PasswordGenerated string is added to one character at a time throught the loop for as many times as passwordLength.
  var passwordGenerated = "";
  for (let i = 0; i < passwordLength; i++) {
    // two ways to write this out
    // var random = Math.floor(Math.random() * charset.length);
    // var randCharset = charset[random];
    // passwordGenerated += randCharset;
    var randCharset = charset.charAt(
      Math.floor(Math.random() * charset.length)
    );
    passwordGenerated += randCharset;
  }
  return passwordGenerated;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// return has te role of making local variables (created and existing inside a function) available outside of that function (returned from the function)
// every piece of code after the return statement will be ignored/not run
