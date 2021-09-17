// Assignment Code
var generateBtn = document.querySelector("#generate");
var upperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',];
let lowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',];
const upperCaseChecked = document.querySelector("#upperCase");
const lowerCaseChecked = document.querySelector("#lowerCase");
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
  