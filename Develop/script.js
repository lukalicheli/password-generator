// Assignment Code

/* 1. prompt 
      1. How many characters do you want your password to be 8 - 128.
        1. Validate that correct number was chosen and then move on, if not repeat prompt.
      2. Do you want upper case?
      3. Do you want lower case?
      4. Do you want numbers?
      5. Do you want special characters?
  2. Validate to see if at least one criteria was chosen?
  3. Generate password based on criteria
  4. Display in password id.
*/


var generateBtn = document.querySelector("#generate");

var capital = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lower = "abcdefghijklmnopqrstuvwxyz";
var numbers = "1234567890"; 
var special = "~!@#$%^&*()_+-=[]{}\|;:',<.>/?";



function generatePassword() {
 
passwordFinal = "";
passwordCriteria = "";


  var criteria2 = prompt("Do you want upper case y/n?");
  if (criteria2 == "y") {
    passwordCriteria += capital.slice();
  }

  var criteria3 = prompt("Do you want lower case y/n?");
  if (criteria3 == "y") {
    passwordCriteria += lower.slice();
  }

  var criteria4 = prompt("Do you want numbers y/n?");

  if (criteria4 == "y") {
    passwordCriteria += numbers.slice();
  }

  var criteria5 = prompt("Do you want special characters y/n?")
 
  if (criteria5 == "y") {
    passwordCriteria += special.slice();
  }

  var criteria = prompt("Choose between 8 and 128 characters");
  var length = parseInt(criteria,10);
  if (length < 128 || length > 8) {
    criteria = length;
  
  }

  
for (var i = 0; i < length; i++) {
  passwordFinal += passwordCriteria.charAt(Math.floor(Math.random() * passwordCriteria.length));
}

  return passwordFinal;

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

