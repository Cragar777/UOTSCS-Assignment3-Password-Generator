// Assignment code here
// Prompt for password criteria
// Window message "Please make the following selections to create your password"
// Select which criteria to include
const alphalc = "abcdefghijklmnopqrstuvwxyz";
const alphauc = "ABCDEFGHIJKLMNOPQRSTUVXYZ";
const numbers = "0123456789";
const symbols = " !#$%&()*+,-./:;<=>?@[\]^_{|}~";
const charTypes = [alphalc, alphauc, numbers, symbols];
// Choose password character length between 8 & 128
var pwlength = Math.floor(Math.random()*120)+8;
console.log(pwlength);

// Window input "Please select the length of your password between"
// Confirm character types of lowercase, uppercase, numeric and special characters
var charString ="";
var charTypeNames = ["alpha-lowercase", "alpha-uppercase", "numbers", "symbols"];
// for (var i=0; i < 4; i++) {
  var i=0;
  do {
  //charTypes(i);
  var charConfirm = prompt("Do you want to include ", charTypeNames[i], "?"); {
  console.log(charConfirm);
    if (charConfirm = true) {
    charString += charTypes[i];
    console.log(charString);
    }
    else {
      i<4, i++;
    }
    i++;
  }
}
  while (i<4);

// Validate input after each prompt and ensure at least one character type is selected
// After all prompts are answered generate password matching criteria selected
function generatePassword() {
  for (i = 0; i < pwlength; i++)
  password += alphalc.charAt(Math.floor(Math.random()*26))
  console.log(password);
}
// Display generated password in alert or on the page

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
