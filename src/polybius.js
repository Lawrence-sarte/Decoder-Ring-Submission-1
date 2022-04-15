// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope


  // const encode alphabet (including a space)
  const cipherEncode = {
    ' ':' ',
    'a':'11', 
    'b':'21',
    'c':'31', 
    'd':'41', 
    'e':'51',
    'f':'12', 
    'g':'22', 
    'h':'32', 
    'i':'42',
    'j':'42',
    'k':'52',
    'l':'13', 
    'm':'23', 
    'n':'33', 
    'o':'43', 
    'p':'53',
    'q':'14', 
    'r':'24', 
    's':'34', 
    't':'44', 
    'u':'54',
    'v':'15', 
    'w':'25', 
    'x':'35', 
    'y':'45', 
    'z':'55'
  }
  //const decode alphabet (including a space)
const cipherDecode = {
  ' ':' ',
  '11':'a', 
  '21':'b', 
  '31':'c', 
  '41':'d', 
  '51':'e',
  '12':'f', 
  '22':'g', 
  '32':'h', 
  '42':'(i/j)', 
  '52':'k',
  '13':'l', 
  '23':'m', 
  '33':'n', 
  '43':'o', 
  '53':'p',
  '14':'q', 
  '24':'r', 
  '34':'s', 
  '44':'t', 
  '54':'u',
  '15':'v', 
  '25':'w', 
  '35':'x', 
  '45':'y', 
  '55':'z'
}

// "helper function" for encoding
function encoderFunc(input){
  // creating variable to turn input into an array that negates capitol letters
  let word = input.toLowerCase().split("");
  // creating variaable for the encoded message
  let output ='';
  // loop through the input array and add the numbers to the encoded message letter by letter
  for (letter of word){
    if(letter in cipherEncode){
      output += cipherEncode[letter];
    }
  }
  return output;
}


//"helper function" for decoding 
function decoderFunc(input){
// turn the input of numbers into sting then turn the string into an array 
 let stringToDecode= input.toString();
 let arrString = stringToDecode.split("");
 // create empty array to push double digit number into that will be turned into letters
 let decodedWordAsNumArr = [];

 // loop through the input (as an array) increments by 2 because the letters are two digit numbers
 for (let i =0; i<arrString.length; i = i+2){
  let currentNum = arrString[i];
  let nextNum = arrString[i+1];
  //if one of the indexes is a string we set i = i-1 to not skip over any numbers we dont intend to skip due to the +2 increment
  if (currentNum === " "){
    decodedWordAsNumArr.push(" ");
    i = i-1;
  } 
  // Push 2 numbers 
  else {
    decodedWordAsNumArr.push(`${currentNum}${nextNum}`);
  }
 }
// map through the array of numbers and find the letter for each double digit number
//keep spaces and spaces if present in the message 
 let decodedWord = decodedWordAsNumArr.map(num =>{
   if(num === " ") {
     return num;
   }
   return cipherDecode[num];
 })
 return decodedWord.join('');
 
}
// actual function and parameters
  function polybius(input, encode = true) {
    // your solution code here


    // If we are to decode, we check to make sure we have an even number of digits (not including spaces) because every letter is a two digit number 
    // if inout has odd number of digits, return false 
  if(encode == false){
    if (input.split(" ").join("").length % 2 == 1){
      return false;
    }
    return decoderFunc(input)
  }
  //If encoding, run input through the encoding helper functuion 
  return encoderFunc(input);
    
  }


  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
