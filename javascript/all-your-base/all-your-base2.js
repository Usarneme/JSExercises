var Converter = function() {};

Converter.prototype.convert = function(value, fromBase, toBase) {
//  console.log('\nNums: '+value+'|len: '+value.length+'|[0]: '+value[0]+', start base: '+fromBase+', end base: '+toBase);

  // Error checking. input errors include:
  if(fromBase === undefined || fromBase < 2 || !Number.isInteger(fromBase) ) {
    throw new Error('Wrong input base');
  }
  if(value[0] === undefined || (value[0] === 0 && value.length > 1) ) {
    throw new Error('Input has wrong format');
  }
  // Error checking. output errors include:
  if(toBase === undefined || toBase < 2 || !Number.isInteger(toBase) ) {
    throw new Error('Wrong output base');
  }
  // No change in base
  if(fromBase === toBase) {
    return value;
  }

  var largestBase = (fromBase > toBase ? fromBase : toBase);
//  console.log('Largest base set to: '+largestBase);
  var range = [];
  for(var fill=0; fill<largestBase; fill++) {
    range.push(fill);
  }
//  console.log('Range filled to: '+range);

  var fromRange = range.slice(0, fromBase);
  var toRange = range.slice(0, toBase);

  var decValue = value.reverse().reduce(function (carry, digit, index) {
//    console.log('Reduce function. Carry: '+carry+', digit: '+digit+', index: '+index);
    if (fromRange.indexOf(digit) === -1) throw new Error('Input has wrong format');
    return carry += fromRange.indexOf(digit) * (Math.pow(fromBase, index));
  }, 0);

  var newValue = '';
  while (decValue > 0) {
    newValue = toRange[decValue % toBase] + newValue;
    decValue = (decValue - (decValue % toBase)) / toBase;
  }

  var formattedReturn = [];
  newValue.split('').forEach(function(val) {
    if( Number.isNaN(parseInt(val)) ) {
      formattedReturn.push( val );
    } else {
      formattedReturn.push( parseInt(val) );
    }
  });
//  console.log('Returning formatted: '+formattedReturn);
  return (formattedReturn.length > 0 ? formattedReturn : [0]);
}

module.exports = Converter;
