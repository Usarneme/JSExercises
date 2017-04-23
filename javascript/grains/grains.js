var BigInt = require('./big-integer');

Grains = function() {
  this.totalGrains = '18446744073709551615';
};

Grains.prototype.square = function(exponent) {
  if(exponent === 1) {
    return '1';
  } else {
    // return the number of grains on that square
    return String( BigInt(2).pow(exponent-1) );
  }
};

Grains.prototype.total = function() {
  return this.totalGrains;
};

module.exports = Grains;
