// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope


// create array of for the standard alphabet 
  let standardAlphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z"
  ];

  function substitution(input, alphabet, encode = true) {
    // your solution code here

    //create empty string 
    let messageResult = "";
    // defensive coding to make sure alphabet param exist and had 26 characters
    if (!alphabet || alphabet.length !== 26){
      return false;
    }
    // for loops to ensure no characters dont repeat
    for (let i =0; i < alphabet.length; i++){
      for (let j=0; j <alphabet.length; j++){
        if(i !== j && alphabet[i]=== alphabet[j]){
          return false;
        }
      }
  }
  // negate capitols and turn alphabet into array to loop through
  const givenAlphabet = alphabet.toLowerCase().split("");
  const givenInput = input.toLowerCase();

  if(encode){
    // loop throught the input, if space, add space into empty string
    for (let i=0; i<givenInput.length; i++){
      let messageLetter = givenInput[i];
      if (messageLetter ===" "){
        messageResult += " ";
      } 
      // if letter, encode letter using the given alphabet and add new encoded letter into empty string variable 
      else {
        let location = standardAlphabet.indexOf(messageLetter);
        messageResult += givenAlphabet[location];

      }
    }
  }

  else if(encode === false){
    // loop throught the input, if space, add space into empty string
    for(let i=0; i< givenInput.length; i++){
      let messageLetter = givenInput[i];
      if(messageLetter === " "){
        messageResult += " ";
      }
      // if letter, decode letter using the standard alphabet and add new encoded letter into empty string variable 
      else { 
        let location = givenAlphabet.indexOf(messageLetter);
        messageResult += standardAlphabet[location];
      }
    }
  }
  return messageResult;
  
}


  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
