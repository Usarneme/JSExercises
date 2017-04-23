/* Series finds the largest product of consecutive digits within the
/ provided @param digits (in String format) */
var Series = function(digits) {
//  console.log('\nThe digits: '+digits);
  this.digits = digits;
};

// The largest product function returns the int value of the largest product
// of the provided @param len number of consecutive digits from the digits provided previously
Series.prototype.largestProduct = function(len) {
//  console.log('In largestProduct function with length: '+len);

  if( this.digits.match(/[^0-9]/g) ) {
    throw new Error('Invalid input.');
  }

  if( len < 0 ) {
    throw new Error('Invalid input.');
  }

  if( this.digits.length = 0 ) {
    return 1;
  }

  if( len === 0 ) {
    return 1;
  }

  if( len > this.digits.length ) {
    throw new Error('Slice size is too big.');
  }

  var largest = 0;
  for(var i=0; i<=this.digits.length - len; i++) {
    var tmp = this.digits.substring(i, i+len).split('');
//    console.log('The tmp values are: '+tmp);
    var product = 1;
    for(var j=0; j<tmp.length; j++) {
      product *= parseInt(tmp[j]);
    }
//    console.log('The product of the current series: '+product+' and the previous held largest: '+largest);
    if(product > largest) {
      largest = product;
    }
    product = 1;
  }
  // console.log('Returning the largest: '+largest);
  return largest;
};

module.exports = Series;
