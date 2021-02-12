// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.textContent = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// object that has all the potential variable assignments in it for the generate password to pass through //
var characterpool = {
  lowercase: "abcdefghijklmnopqrstuvwxyz",
  uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  number: "0123456789",
  symbol: " !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~", // added \ in front of "problem characters that would end string"  //
};

// function that actually creates the password //
function generatePassword() {
  var password = "";
  var passwordCharSet = "";

  // user input for how many characters they want their password to be //
 var length = window.prompt("Enter a number from 8 to 128 for your password length.");

 // Message to user if they do not pick a number in the range //
 if (length < 8 || length > 128) {
   alert("You must select a number between 8 and 128 to continue")
   return;
 }

 // if the user selects the length of the password in the appropriate range then it will ask them what character types they want to use //
 if (length >= 8 && length <= 128){
  var lowercase = window.confirm("Would you like to use lowercase letters?");
  if (lowercase === true) {
    passwordCharSet += characterpool.lowercase; // when user selects to use lowercase, this line adds the corresponding character pool to the password character set //
  };

  var uppercase = window.confirm("Would you like to use uppercase letters?");
  if (uppercase === true) {
    passwordCharSet += characterpool.uppercase; // when user selects to use uppercase, this line adds the corresponding character pool to the password character set //
  };

  var symbols = window.confirm("Would you like to use symbols?");
  if (symbols === true) {
    passwordCharSet += characterpool.symbol; // when user selects to use symbols, this line adds the corresponding character pool to the password character set //
  };

  var numbers = window.confirm("Would you like to use numbers?");
  if (numbers === true) {
    passwordCharSet += characterpool.number; // when user selects to use numbers, this line adds the corresponding character pool to the password character set //
  };

// for statement that generates a random character from the password character set and adds it to the password.  This is done however many times is necessary to satisfy the users selected length //  
  for (let i = 0; i < length; i++) { 
    password += passwordCharSet[Math.floor(Math.random() * passwordCharSet.length)]
  }
  return password;
}

}
