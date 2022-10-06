// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

  var charactersLength = window.prompt('Select amount of characters desired for your password:')

  if(charactersLength < 8 || charactersLength > 128) {
    window.alert('Please select valid amount of characters.\n - Min: 8\n- Max: 128')
  }

  var uppercaseConfirm = window.confirm('Would you like your password to include UPPERCASE letters?')

  var lowercaseConfirm = window.confirm('Would you like your password to include lowercase letters?')

  var numbersConfirm = window.confirm('Would you like your password to include numbers?')

  var specialConfirm = window.confirm('Would you like your password to include special characters?')






  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
