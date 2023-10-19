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

  //password length prompt
  
  var prompt = prompt("How many characters would you like your password to contain?");

  //password object

    var password = {
      length: prompt,
      specialChar: undefined,
      lowercase: undefined,
      uppercase: undefined,
      numeric: undefined
    };

  //checks if length is within requirements

  if (password.length >= 8 && password.length <= 128) {
    console.log(length);
  } else if (password.length < 8) {
    alert("Password length must be at least 8 characters");
  } else if (password.length > 128) {
    alert("Password length must be less than 128 characters");
  } else {
    alert("Invalid input");
  }

  //confirmation on character types lowercase, uppercase, numeric, and special characters
  // if none select display message that at least one must be selected
  if (window.confirm("Click OK to confirm including special characters.")) {
    
  } else {

  }


  //generates and returns password

  
}
