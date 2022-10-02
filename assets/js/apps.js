// Assignment code here

// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria

// WHEN prompted for password criteria
// THEN I select which criteria to include in the password

// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters

// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters


// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page


//  Create Vars for lowercase, uppercase, numeric values and special characters


var numericValues = [0 , 1 , 2 , 3 , 4 , 5 , 6 , 7 ,8 , 9 , 0];
var specialCharacters = ['!', '#', '$' , '@', '%' , '^' , '+' , '-' , '?' , '~' , '*' ]
var alphabetUpper = [ 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L',
    'M', 'N', 'O', 'P', 'Q', 'R',  'S', 'T', 'U', 'V', 'W', 'X',
    'Y', 'Z' ]

var alphabetLower = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q", 
"r","s","t","u","v","w","x","y","z"];


// console.log(alphabetUpper);
// console.log(alphabetLower);



function messagePrompt(){

window.prompt('Would you like to generate a random password?');
window.prompt('Your password length should be between 8 and 128 charcters.');
window.prompt('Would you like to include lowercase?');
window.prompt('Would you like to include uppercase?');
window.prompt('Would you like a numeric value?');
window.prompt('Would you like special characters?');

}

messagePrompt();



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

