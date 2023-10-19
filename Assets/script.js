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
  var passwordLength = prompt("How many characters would you like your password to contain?");

  if (passwordLength >= 8 && passwordLength <= 128) {
    console.log(passwordLength);
  } else if (passwordLength < 8) {
    alert("Password length must be at least 8 characters");
  } else if (passwordLength > 128) {
    alert("Password length must be less than 128 characters");
  } else {
    alert("Invalid input");
  }

  //confirmation on character types lowercase, uppercase, numeric, and special characters
  // if none slect display message that at least one must be selected


  //generates and returns password

  
}
