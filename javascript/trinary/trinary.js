// Contains a Trinary number stored in this.value
var Trinary = function(input) {
  this.value = input;
};

// Method to convert this.value's Trinary number to decimal format
Trinary.prototype.toDecimal = function() {
  // if the Trinary is malformed, i.e. contains anything other than 2, 1 or 0
  if(this.value.match(/[^012]/g)) {
    // return 0 as it is malformed
    return 0;
  } else {
    // Variables to store the individual Trinary values 010 => [0,1,0]
    // and the resulting decimal number as it increases before being returned
    var arr = this.value.split(''),
        result = 0;
    for(var i=0; i<arr.length; i++) {
      // From right to left, each value in the Trinary number
      // is raised to 2^n where n is it's place (0s=0, 10s=1, 100s=2, 1000s=3, etc.)
      result += arr[(arr.length-i-1)] * Math.pow(3,i);
    }
    return result;
  }
};

module.exports = Trinary;
