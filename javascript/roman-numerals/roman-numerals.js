// Function to convert a provided number into Roman Numerals. Upper limit 9999
var toRoman = function(num) {
  // variables to hold the individual values from each place in the 4 digits 0000 and the return phrase
  var ones = Math.floor(num % 10),
      tens = Math.floor(num / 10 % 10),
      hundreds = Math.floor(num / 100 % 10),
      thousands = Math.floor(num % 10000 / 1000),
      retPhrase = '';
//  console.log('\nThos: '+thousands+', Huns: '+hundreds+', Tens: '+tens+', Ones: '+ones);

  // Checks for values in each of the 4 digits 0000 and converts them for each place.
  if(thousands === 0) {} else {
    retPhrase += convert(thousands, 1000);
  }
  if(hundreds === 0) {} else {
    retPhrase += convert(hundreds, 100);
  }
  if(tens === 0) {} else {
    retPhrase += convert(tens, 10);
  }
  if(ones === 0) {} else {
    retPhrase += convert(ones, 1);
  }

//  console.log('toRoman Returning: '+retPhrase);
  return retPhrase;
};

// Convert each digit up to 9999 to it's contituent roman numeral. Once place at a time.
// @param index: the place 1s, 10s, 100s, or 1000s
var convert = function(number, index) {
  // variables to hold the numeral array (dependent on place) and return value string
  var numeralArray = [],
      retVal = '';

  // switch based on the place index, sets the numeral array to the correct letter values for that place
  switch(index) {
    case 1000:
    numeralArray = numeralArray.concat(['M','Cbar','C']);
    break;
    case 100:
    numeralArray = numeralArray.concat(['C','D','M']);
    break;
    case 10:
    numeralArray = numeralArray.concat(['X','L','C']);
    break;
    case 1:
    numeralArray = numeralArray.concat(['I','V','X']);
    break;
  }

  // pattern for roman numerals 1-10. index determines the letter values in the numeral array
  switch(number) {
    case 1:
    retVal += numeralArray[0];
    break;
    case 2:
    retVal += numeralArray[0]+numeralArray[0];
    break;
    case 3:
    retVal += numeralArray[0]+numeralArray[0]+numeralArray[0];
    break;
    case 4:
    retVal += numeralArray[0]+numeralArray[1];
    break;
    case 5:
    retVal += numeralArray[1];
    break;
    case 6:
    retVal += numeralArray[1]+numeralArray[0];
    break;
    case 7:
    retVal += numeralArray[1]+numeralArray[0]+numeralArray[0];
    break;
    case 8:
    retVal += numeralArray[1]+numeralArray[0]+numeralArray[0]+numeralArray[0];
    break;
    case 9:
    retVal += numeralArray[0]+numeralArray[2];
    break;
    case 10:
    retVal += numeralArray[2];
    break;
  }

  return retVal;
};

module.exports = toRoman;
