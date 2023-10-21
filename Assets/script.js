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

  var prompt = window.prompt("How many characters would you like your password to contain?");

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
    charTypes();
  } else if (password.length < 8) {
    alert("Password length must be at least 8 characters");
  } else if (password.length > 128) {
    alert("Password length must be less than 128 characters");
  } else {
    alert("Invalid input");
  }

  //confirmation on character types lowercase, uppercase, numeric, and special characters
  // if none select display message that at least one must be selected
  function charTypes(){
      if (window.confirm("Click OK to confirm including special characters.")) {
        password.specialChar = true;
        console.log(password.specialChar);
      } else {
        password.specialChar = false;
      }

      if (window.confirm("Click OK to confirm including numeric characters.")) {
        password.numeric = true;
        console.log(password.numeric);
      } else {
        password.numeric = false;
      }

      if (window.confirm("Click OK to confirm including lowercase characters.")) {
        password.lowercase = true;
        console.log(password.lowercase);
      } else {
        password.lowercase = false;
      }

      if (window.confirm("Click OK to confirm including uppercase characters.")) {
        password.uppercase = true;
        console.log(password.uppercase);
      } else {
        password.uppercase = false;
      }
  }
  //added arrays for characters
  var upperArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var lowerArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o",  "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var numArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var charArray = ["@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+"];

  //generates and returns password
  
  
}
