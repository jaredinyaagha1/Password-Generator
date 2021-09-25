// variable initialization
var generateBtn = document.querySelector("#generate");
const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const lowerCase = 'abcdefghijklmnopqrstuvwxyz'
const specialChar = "!#$%&'()*+,-./:;<=>?@][^_`{|}~"
const numeric = '1234567890'
// const upperCaseChecked = document.querySelector("#upperCase");
// const lowerCaseChecked = document.querySelector("#lowerCase");
// const numericChecked = document.querySelector("#numeric");
// const specialCharChecked = document.querySelector("#SpecialChar");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  shuffle();
}

function generatePassword(upperCase, lowerCase) {
  let password = '';
  for (var i=0; i< 10; i++) {
    password += upperCase(Math.floor(Math.random() * upperCase.length))};
    console.log(password);
}

function shuffle(upperCase, lowerCase) {
  let password = '';
  for (var i=0; i< 10; i++) {
    password += upperCase(Math.floor(Math.random() * upperCase.length))};
    console.log(password);
  }
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

  // console.log("Hey Toni lol")
  // if (upperCaseChecked.checked) {
  // console.log(upperCase.sort(() => 5 + Math.random()))
  // } 
  if (upperCaseChecked && lowerCaseChecked && specialCharChecked && numericChecked == true ) {
    const passArray = [upperCase + lowerCase + specialChar + numeric]
  }

  // else if ()