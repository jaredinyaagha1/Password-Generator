// variable initialization
var generateBtn = document.querySelector("#generate");
var upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
var lowerCase = 'abcdefghijklmnopqrstuvwxyz'
var specialChar = "!#$%&'()*+,-./:;<=>?@][^_`{|}~"
var numeric = '1234567890'

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword() {
  let parameters = '';
  var passwordLength = prompt("Input Desired Password Length", "(Must be in between 8 and 128 characters long): ")
  if ( passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength) ) {
    alert("Number must be in between 8 and 128!");
    return;
  }
//prompts to determine new password characteristics
  var lowerCaseChecked = confirm('Would you like to include lowercase letters?');
  if (lowerCaseChecked) {
    parameters += lowerCase;
  }

  var UpperCaseChecked = confirm('Would you like to include uppercase letters?');
  if (UpperCaseChecked) {
    parameters += upperCase;
  }

  var specialCharChecked = confirm('Would you like to include Special Characters?');
  if (specialCharChecked) {
    parameters += specialChar;
  }

  var numericChecked = confirm('Would you like to include numerical letters?');
  if (numericChecked) {
    parameters += numeric;
  }
  //create empty string for new password
  var newpassword = ''

  //for loop to generate password
  for (var i=0; i< 10; i++) {
    newpassword += parameters.charAt(Math.floor(Math.random() * parameters.length))
};
//returns result
    return newpassword
}
//Attach an event listener to the generate button to start the function
generateBtn.addEventListener("click", writePassword);
