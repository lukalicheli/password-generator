// Assignment Code
var generateBtn = document.querySelector("#generate");

var capital = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lower = "abcdefghijklmnopqrstuvwxyz";
var numbers = "1234567890"; 
var special = "~!@#$%^&*()_+-=[]{}\|;:',<.>/?";



function generatePassword() {

  passwordFinal = "";
  passwordCriteria = "";
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

//1. 
  var criteria = prompt("Choose between 8 and 128 characters");
  var length = passwordFinal.length;
  if (length > 128 || length < 8) {
    
  }

//1a. 
  var criteria2 = prompt("Do you want upper case y/n?");
  //if yes passwordCriteria += capital, else, move on to lower case.
  if (criteria2 == "y") {
    passwordCriteria += capital.slice();
  }

//1b. 
  var criteria3 = prompt("Do you want lower case y/n?");
  //if yes passwordCriteria += lower, else, move on to numbers
  if (criteria3 == "y") {
    passwordCriteria += lower.slice();
  }

//1c.
  var criteria4 = prompt("Do you want numbers y/n?");
  // if yes passwordCriteria += numbers, else, move on to special characters
  if (criteria4 == "y") {
    passwordCriteria += numbers.slice();
  }

//1d.
  var criteria5 = prompt("Do you want special characters y/n?")
  //if yes passwordCriteria += special, else, generate random password
  if (criteria5 == "y") {
    passwordCriteria += special.slice();
  }

//2.
  //if (passwordCriteria.length > 0) { run code to generate random character 
// } else { return and run generatePassword again}
//3. 
  //Generate random 
length = passwordCriteria.length; //probably supposed to be under first prompt
for (var i = 0; i < length; i++) {
  passwordFinal += passwordCriteria.charAt(Math.floor(Math.random() * length));
}



//4. return passwordFinal with generated code

console.log(passwordCriteria);
console.log(passwordFinal);
  
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




// TODO: add code to generate the password here
  //var parameters = prompt("Choose between 8 and 128 characters");
  
  // var capital = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  // var capitalLength = capital.length;
  // var lower = "abcdefghijklmnopqrstuvwxyz";
  // var lowerLength = lower.length;
  // var numbers = "1234567890"; 
  // var numbersLength = numbers.length;
  // var special = "~!@#$%^&*()_+-=[]{}\|;:',<.>/?";
  // var specialLength = special.length;
  
  // var result = "";
  
  // var question1 = prompt("Do you want uppercase?");

  // for (var i=0; i<capitalLength; i++) {
  //   result += capital.charAt(Math.floor(Math.random() * capitalLength));
  // }

  // for (var i=0; i<lowerLength; i++) {
  //   result += lower.charAt(Math.floor(Math.random() * lowerLength));
  // }

  // for (var i=0; i<numbersLength; i++) {
  //   result += numbers.charAt(Math.floor(Math.random() * numbersLength));
  // }

  // for (var i=0; i<specialLength; i++) {
  //   result += special.charAt(Math.floor(Math.random() * specialLength));
  // }
