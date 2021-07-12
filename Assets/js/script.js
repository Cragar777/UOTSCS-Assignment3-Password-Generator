// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
// Assignment code here
// Prompt for password character length between 8 & 128
var pwLength = prompt("Please enter a password length between 8 and 128 characters:");
console.log(pwLength);

// Confirm character types of lowercase, uppercase, numeric and special characters

const alphalc = "abcdefghijklmnopqrstuvwxyz";
const alphauc = "ABCDEFGHIJKLMNOPQRSTUVXYZ";
const numbers = "0123456789";
const symbols = " !#$%&()*+,-./:;<=>?@[\]^_{|}~";
const charTypes = [alphalc, alphauc, numbers, symbols];

var charString ="";
var charTypeNames = ["alpha-lowercase (abc)", "alpha-uppercase (ABC)", "numbers (123)", "symbols (@#$)"]; 
var i=0;
  do {
      var charConfirm = confirm("Do you want to include " + charTypeNames[i] + "?");{ 
      console.log(charConfirm);
      if (charConfirm === true) {
      charString += charTypes[i];}
      console.log(charString);
      i++;   
    }
    // Validate input after each prompt and ensure at least one character type is selected
    if (i==4 && charString=="") {
      i=0;
      charConfirm = alert("Please choose at least one character type.");
    }
}
  while (i<4);
  var charStringLength=charString.length;

// After all prompts are answered generate password matching criteria selected
function generatePassword() {
  for (i = 0; i < pwLength; i++)
  password += charString.charAt(Math.floor(Math.random()*charStringLength))
  console.log(password);
  return password;
}

// Display generated password in alert or on the page



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
