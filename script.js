// Assignment Code
var generateBtn = document.querySelector("#generate");

// Define ASCII Character Code Array

var lowerCaseCharCode = charCodeArray(97, 122);
var upperCaseCharCode = charCodeArray(65, 90);
var numericCharCode = charCodeArray(48, 57);
// Concat is needed since special character codes are not in sequence in ASCII.
var specialCharCode = charCodeArray(32, 47).concat(
  charCodeArray(58,64)
).concat(
  charCodeArray(91,96)
).concat(
  charCodeArray(123, 126)
);

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {

  //User prompts for password criteria. 

  var lowerCasePrompt = prompt("Do you want the password to include lowercase character\(s)\? Answer 'yes' or 'no.'");
  lowerCasePrompt = lowerCasePrompt.toLowerCase();

  var upperCasePrompt = prompt("Do you want the password to include uppercase character\(s)\? Answer 'yes' or 'no.'");
  upperCasePrompt = upperCasePrompt.toLowerCase();
  
  var numericPrompt = prompt("Do you want the password to include numeric character\(s)\? Answer 'yes' or 'no.'");
  numericPrompt = numericPrompt.toLowerCase();
  
  var specialPrompt = prompt("Do you want the password to include special character\(s)\? Answer 'yes' or 'no.'");
  specialPrompt = specialPrompt.toLowerCase();
  
  var passwordLengthPrompt = prompt("Please choose a password length of at least 8 characters and no more than 128 characters.");

  // Validate user selected criteria. If no character type is selected or if character length is not between 8 and 128, user will be asked to start over.

  if (lowerCasePrompt === "no" && upperCasePrompt === "no" && numericPrompt === "no" && specialPrompt === "no") {
    alert("Please choose at least one character type. Click the 'Generate Password' button to start over again.")
  } else if (passwordLengthPrompt < 8 || passwordLengthPrompt > 128) {
    alert("Please choose a length of at least 8 characters and no more than 128 characters. Click the 'Generate Password' button to start over again.")
  } else {
    var password = generatePassword(lowerCasePrompt, upperCasePrompt, numericPrompt, specialPrompt, passwordLengthPrompt);
    var passwordText = document.querySelector("#password");
  
    passwordText.value = password;
  }
};

//Function to generate password
//Include a character type if user selects it as a password criteria
function generatePassword(lowerCasePrompt, upperCasePrompt, numericPrompt, specialPrompt, passwordLengthPrompt) {
  var passcode = [];
  if (lowerCasePrompt === "yes") passcode = passcode.concat(lowerCaseCharCode);
  if (upperCasePrompt === "yes") passcode = passcode.concat(upperCaseCharCode);
  if (numericPrompt === "yes") passcode = passcode.concat(numericCharCode);
  if (specialPrompt === "yes") passcode = passcode.concat(specialCharCode);


  var passcodeCharacters = [];
  for (var i = 0; i < passwordLengthPrompt; i++) {
    //Generates random characters based on selected criteria. THe length of characters will be based on user input.
    var characterCode = passcode[Math.floor(Math.random() * passcode.length)]
    //Convert unicode values into character
    passcodeCharacters.push(String.fromCharCode(characterCode))
  }
  return passcodeCharacters.join('')
}

// Create a function to loop through Character Code Array

function charCodeArray(x, y) {
  var array = []
  for (var i = x; i <= y; i++) {
    array.push(i)
  }
  return array
};