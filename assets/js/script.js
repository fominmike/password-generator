// Assignment code here

// defined ID
var passwordArea = document.getElementById('password')

// characters that have all options
var characters = {
  uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  lowercase: 'abcdefghijklmnopqrstuvwxyz',
  numbers: '0123456789',
  special: "!@#$%^&*()_+~\\`|}{[]:;?><,./-="
}




// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");

// Write password to the #password input
function writePassword() {
  var passwordString = ''

  var charactersLength = window.prompt('Select amount of characters desired for your password:')

  if(charactersLength < 8 || charactersLength > 128) {
    window.alert('Please select valid amount of characters.\n - Min: 8\n- Max: 128')
  }
// add comments for the users choices
  var uppercaseConfirm = window.confirm('Would you like your password to include UPPERCASE letters?')

  var lowercaseConfirm = window.confirm('Would you like your password to include lowercase letters?')

  var numbersConfirm = window.confirm('Would you like your password to include numbers?')

  var specialConfirm = window.confirm('Would you like your password to include special characters?')

  if (uppercaseConfirm === false && lowercaseConfirm === false && numbersConfirm === false && specialConfirm === false) {
    window.alert('Please select OK on one of the given choices to generate password!')
  }

  if (uppercaseConfirm === true) {
    passwordString = passwordString.concat(characters.uppercase)
  }

  if (lowercaseConfirm === true) {
    passwordString = passwordString.concat(characters.lowercase)
  }

  if (numbersConfirm === true) {
    passwordString = passwordString.concat(characters.numbers)
  }

  if (specialConfirm === true) {
    passwordString = passwordString.concat(characters.special)
  }

  var passwordOptions = passwordString.split('')

  var password = []


  for (var index = 0; index < charactersLength; index++) {
    var randomNumber = Math.floor(Math.random() * passwordOptions.length)
    var random = passwordOptions[randomNumber]
    password.push(random)  
  }
  password = password.join('')
  passwordArea.textContent = password

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
