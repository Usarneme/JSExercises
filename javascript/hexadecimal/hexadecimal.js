const converted = {
  '0': 0,
  '1': 1,
  '2': 2,
  '3': 3,
  '4': 4,
  '5': 5,
  '6': 6,
  '7': 7,
  '8': 8,
  '9': 9,
  'a': 10,
  'b': 11,
  'c': 12,
  'd': 13,
  'e': 14,
  'f': 15
}

/* Hexadecimal converts a provided @param StringValue in hexadecimal
/  and returns it's decimal equivalent (or 0 if an invalid hex value is given) */
var Hexadecimal = function(stringValue) {
  this.val = stringValue;
};

Hexadecimal.prototype.toDecimal = function() {
  var valuesArray = this.val.split(''),
      sum = 0;

  for(var i=0; i<valuesArray.length; i++) {
    // Convert letters to their respective number value 0-15
    valuesArray[i] = converted[valuesArray[i]];

//    console.log('valuesArray[i]: '+valuesArray[i]+' * 16^(i-len-1):'+(valuesArray.length - i - 1)+' is: '+16*Math.pow(16, valuesArray.length - i -1) );

    // if an invalid number or letter is attempted...
    if(valuesArray[i] === undefined) {
      return 0;
    } else {
      // Add the value * 16 to the power of the index (in reverse
      // order e.g.: 0,1,2 => 2,1,0 for length 3) to the sum
      sum += (valuesArray[i] * Math.pow(16, valuesArray.length - i - 1) );
    }
  }

  return sum;
};

module.exports = Hexadecimal;
