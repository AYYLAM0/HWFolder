

var lowerChar = ["a", "b", "c"];
var upperChar = ["A", "B", "C"];
var num = ["1", "2", "3"];
var specialChar = ["!", "@", "#"];

// Assignment Code
var generateBtn = document.querySelector("#generate");




//confirming lengtrh
function createPassword() {
  var characterLength = parseInt(prompt("How many characters does the password require?"));
  if (isNaN(characterLength)) {
    alert("Input must be a number");
    return;
  }

  if (characterLength < 8 || characterLength > 128) {
    alert("Password has to be between 8-128 characters");
    return;
  }

  //confrirming requirements for password
  var lowerRequired = confirm("Click Confirm if lowercases are required/desired");
  var upperRequired = confirm("Click Confirm if uppercases are required/desired");
  var symbolRequired = confirm("Click Confirm if special characters are required/desired");
  var numberRequired = confirm("Click Confirm if numbers are required/desired");

  if (lowerRequired === false && upperRequired === false && symbolRequired === false && numberRequired === false && symbolRequired === false) {
    alert("One of the options must be selcted to continue.")
    return
  }

  var passwordOptions = {
    length: characterLength, lower: lowerRequired, upper: upperRequired, num: numberRequired, symbol: symbolRequired
  }
  console.log(passwordOptions)
  return passwordOptions;
}

function randomizer(arr) {
  var randomIndex = Math.floor(Math.random * arr.length);
  var randomElement = arr[randomIndex];

  return randomElement;
}

function generatePassword() {
  var options = createPassword();
  console.log(options)
  var tempPass = [];
  var possibleCharacter = [];
  if (options.lower) {
    possibleCharacter = possibleCharacter.concat(lowerChar)
  }
 
  if (options.upper) {
    possibleCharacter = possibleCharacter.concat(upperChar)
  }

  if (options.num) {
    possibleCharacter = possibleCharacter.concat(num)
  }

  if (options.symbol) {
    possibleCharacter = possibleCharacter.concat(specialChar)
  }
  for (var i = 0; i < options.length; i++) {
    var characters = randomizer(possibleCharacter)
    tempPass.push(characters)
  }
  console.log(tempPass)
  return tempPass
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
