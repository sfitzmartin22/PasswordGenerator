// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// object that has all the variables and potential variable assignments in it to for the generate password to pass through //
var characterpool = {
  lowercase: "abcdefghijklmnopqrstuvwxyz",
  uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  number: "0123456789",
  symbol: "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~",
};

// function that defines password specifications and then assigns //
function generatePassword() {
  var password = "";
  var passwordCharSet = "";

  var length = window.prompt("Enter a number from 8 to 128 for your password length.");

  var lowercase = window.confirm("Would you like to use lowercase letters?");
  if (lowercase === true) {
    passwordCharSet += characterpool.lowercase;
  };

  var uppercase = window.confirm("Would you like to use uppercase letters?");
  if (uppercase === true) {
    passwordCharSet += characterpool.uppercase;
  };

  var symbols = window.confirm("Would you like to use symbols?");
  if (symbols === true) {
    passwordCharSet += characterpool.symbol;
  };

  var numbers = window.confirm("Would you like to use numbers?");
  if (numbers === true) {
    passwordCharSet += characterpool.number;
  };

  for (let i = 0; i < length; i++) {
    password += passwordCharSet[Math.floor(Math.random() * passwordCharSet.length)]
  }
  return password;
}

