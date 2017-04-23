const conversions = {
  1 : 'wink',
  10 : 'double blink',
  100 : 'close your eyes',
  1000 : 'jump'
};

var SecretHandshake = function(number) {
  if( typeof number !== 'number' ) {
    throw new Error('Handshake must be a number');
  } else {
    this.number = number;
  }
};

SecretHandshake.prototype.commands = function() {
  // Converted number from decimal to binary, Array for return values, and reverse boolean
  var converted = (this.number >>> 0).toString(2),
      retArr = [],
      reverseFlag = false;
//  console.log('Converted: '+converted+' with [conversions[converted]]: '+[conversions[converted]]);

  if( conversions[converted] ) {
//    console.log('Returning: '+conversions[converted]);
    retArr.push( conversions[converted] );
  } else {

    while( converted-10000 > 0) {
      converted = converted - 10000;
      reverseFlag = true;
    }
    while( converted-1000 > 0) {
      retArr.push( conversions[1000] );
      converted = converted - 1000;
    }
    while( converted-100 > 0) {
      retArr.push( conversions[100] );
      converted = converted - 100;
    }
    while( converted-10 > 0) {
      retArr.push( conversions[10] );
      converted = converted - 10;
    }
    while( converted-1 === 0) {
      retArr.push( conversions[1] );
      converted = converted - 1;
    }
  }
  // If the reverseFlag boolean is false then reverse the order of the return array values
  if (reverseFlag) {
    return retArr;
  } else {
    return retArr.reverse();
  }
};

module.exports = SecretHandshake;
