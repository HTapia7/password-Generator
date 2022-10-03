// Assignment code here



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

var alphabetLower = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q", "r","s","t","u","v","w","x","y","z"];


var randomPassword = [];

function messagePrompt(){

var userLengthInput = window.prompt('How long do you want your password to be?');

var passwordLength = parseInt(userLengthInput);

if(isNaN(userLengthInput)){
    window.alert('This is not a number ')
    return
}
if (passwordLength < 8 || passwordLength > 128){
    window.alert('Password length must be between 8 and 128.')
    return
}

// console.log(passwordLength);  <--- Testing purposes 


// Variables for prompt messages

userInputLowerCase = window.confirm('Would you like to include lowercase?');
userInputUpperCase = window.confirm('Would you like to include uppercase?');
userInputNumericValue = window.confirm('Would you like a numeric value?');
userInputSpecialCharacters = window.confirm('Would you like special characters?');

if (userInputLowerCase === true){
    randomPassword.push(alphabetLower)
}

if (userInputUpperCase === true){
    randomPassword.push(alphabetUpper)
}

if (userInputNumericValue === true){
    randomPassword.push(numericValues)
}

if (userInputSpecialCharacters === true){
    randomPassword.push(specialCharacters)
}

console.log(randomPassword)

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

