// double every second digit starting from the right and replace that digit with the product
// if the product is greater than 9, subtract 9 from the product before replacing
// the sum of all the new digits must be divisible by 10 to be a Luhn number

// Determines if a provided series of digits
// @param stringNumber which is in String format
// is a valid Luhn number: returns true or false
var Luhn = function(stringNumber) {
  if (stringNumber.length < 2 || stringNumber.match(/[^0-9\s]/g) ) {
    this.valid = false;
  } else {
    var working = stringNumber.match(/[0-9]/g).reverse(),
        result = 0;
    for (var i=1; i<working.length; i++) {
      if ( (working[i] * 2) > 9) {
        working[i] = (working[i] * 2) - 9;
      } else {
        working[i] = working[i] * 2;
      }
      i++;
    }
    working.forEach(function(i) {
      result += parseInt(i);
    })
    if( result%10 === 0) {
      this.valid = true;
    } else {
      this.valid = false;
    }
  }
};

module.exports = Luhn;
