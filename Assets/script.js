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
      inputLength: prompt,
      specialChar: undefined,
      lowercase: undefined,
      uppercase: undefined,
      numeric: undefined
    };

  //added arrays for characters

  var upperArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var lowerArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o",  "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var numArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var specialArray = ["@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+"];
  
  // added empty arrays to store the selected characters and the randomly chosen password

  var selectedChars = [];
  var createdPassword = [];

  //checks if length of password is within requirements

  if (password.inputLength >= 8 && password.inputLength <= 128) {
    charTypes();
  } else if (password.inputLength < 8) {
    alert("Password length must be at least 8 characters");
  } else if (password.inputLength > 128) {
    alert("Password length must be less than 128 characters");
  } else {
    alert("Invalid input");
  }

  //confirmation on character types lowercase, uppercase, numeric, and special characters
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

      // if no character types are selected then it displays an alert else it runs the developPassword function and stores it in a variable
      if (password.uppercase === false && password.lowercase === false && password.specialChar === false && password.numeric === false) {
        alert("You need to select at least one character type.")
      } else {
        var createdPassword = developPassword();
      }

  }
 
  //generates and returns password
  function developPassword() {
    if (password.numeric){
      selectedChars = selectedChars.concat(numArray);
      
    }
    
    if (password.uppercase){
      selectedChars = selectedChars.concat(upperArray);
    
    }
    
    if (password.lowercase){
      selectedChars = selectedChars.concat(lowerArray);
    
    }
    
    if (password.specialChar){
      selectedChars = selectedChars.concat(specialArray);
    }
    
    //for the given characters in the selectedChar array it selects characters and pushs them to the createdPassword array
    for (var i = 0; i < password.inputLength; i++) {
          
      createdPassword.push (selectedChars[Math.floor(Math.random() * selectedChars.length)]); 

      }

      //makes the array of characters into a string and returns the value
      createdPassword = createdPassword.join("") ;
      return createdPassword;
      
      
    }
    return createdPassword
  }
  
