// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  //prompt for password length and check if length is within requirements

  
  //confirmation on character types lowercase, uppercase, numeric, and special characters
  // if none slect display message that at least one must be selected


  //generates and returns password

  
}
