// Assignment Code
var generateBtn = document.querySelector("#generate");

// Define ASCII Character Code Array

var lowerCaseCharCode = charCodeArray(65, 90);
var upperCaseCharCode = charCodeArray(97, 122);
var numericCharCode = charCodeArray(48, 57);
var specialCharCode = charCodeArray(33, 47).concat(
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
  if (lowerCasePrompt === "no" && upperCasePrompt === "no" && numericPrompt === "no") {
    alert("Please choose at least one character type. Refresh the page and start over again.")
  } else if (passwordLengthPrompt < 8 || passwordLengthPrompt > 128) {
    alert("Please choose a length of at least 8 characters and no more than 128 characters. Refresh the page and start over again.")
  } else {
    var password = generatePassword(passwordLengthPrompt, lowerCasePrompt, upperCasePrompt, numericPrompt, specialPrompt);
    var passwordText = document.querySelector("#password");
  
    passwordText.value = password;
  }
};

// Create function to generate password

function generatePassword(passwordLengthPrompt, lowerCasePrompt, upperCasePrompt, numericPrompt, specialPrompt) {
  var passcode = [];
  if (lowerCasePrompt === "yes") passcode = passcode.concat(lowerCaseCharCode);
  if (upperCasePrompt === "yes") passcode = passcode.concat(upperCaseCharCode);
  if (numericPrompt === "yes") passcode = passcode.concat(numericCharCode);
  if (specialPrompt === "yes") passcode = passcode.concat(specialCharCode);

  var passcodeCharacters = []
  for (var i = 0; i < passwordLengthPrompt; i++) {
    var characterCode = passcode[Math.floor(Math.random() * passcode.length)]
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

// User prompts for password criteria. Create logic to only show next criteria if user inputs a valid option

alert("Welcome to the Password Generator! You will be asked a series of questions to select your password criteria. Select 'Generate Password' when you have answered all questions.");

var lowerCasePrompt = prompt("Do you want the password to include lowercase character\(s)\? Answer 'yes' or 'no.'");
lowerCasePrompt = lowerCasePrompt.toLowerCase();


var upperCasePrompt = prompt("Do you want the password to include uppercase character\(s)\? Answer 'yes' or 'no.'");
upperCasePrompt = upperCasePrompt.toLowerCase();


var numericPrompt = prompt("Do you want the password to include numeric character\(s)\? Answer 'yes' or 'no.'");
numericPrompt = numericPrompt.toLowerCase();


var specialPrompt = prompt("Do you want the password to include special character\(s)\? Answer 'yes' or 'no.'");
specialPrompt = specialPrompt.toLowerCase();

var passwordLengthPrompt = prompt("Please choose a password length of at least 8 characters and no more than 128 characters.");

