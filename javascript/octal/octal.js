// expect(new Octal('1').toDecimal()).toEqual(1);
// expect(new Octal('10').toDecimal()).toEqual(8);

var Octal = function(stringNumber) {
  this.val = stringNumber;
};

Octal.prototype.toDecimal = function() {
  if( this.val.match(/[^0-7]/g) ) {
    return 0;
  } else {
    return parseInt(this.val, 8);
  }
};

module.exports = Octal;
