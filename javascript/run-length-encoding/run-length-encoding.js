/* Run Length encoding
* Shorten repeating-letter strings such as: ABBCCC becomes A2B3C
* Lengthen shorthand notation to full string length such as: 3A2BC becomes AAABBC
*/
var RLE = function() {};

// Encode: converts a plaintext (long) string to it's shorthand equivalent
RLE.prototype.encode = function(plaintext) {
//	console.log('\nEncode function. Plaintext: '+plaintext);
	var ciphertext = '', matches;

  while(plaintext) {
    var letter = plaintext[0];
		var str = letter+'{1,}'
		var regex = new RegExp(str, 'gm');
		match = plaintext.match(regex);

		if(match[0].length === 1) {
			ciphertext += letter;
		} else {
			ciphertext += match[0].length + letter;
		}
    plaintext = plaintext.substring(match[0].length,plaintext.length);
  }
	return ciphertext;
};

// Decode: converts a ciphertext (shorthand) string to it's full length equivalent
RLE.prototype.decode = function(ciphertext) {
//	console.log('\nDecode function. Ciphertext: '+ciphertext);
	var plaintext = '',
	    regex = new RegExp('([0-9]*)([A-Za-z]*)');

	while(ciphertext) {
		// splits off the first matching number-letter pair
		// eg: [ '2A', '2', 'A', index: 0, input: '2A4B33C' ]
    var tmp = ciphertext.match(regex);

		// if the second element (number) is not blank...
    if(tmp[1] !== '') {
			// fill the plaintext with the letter i number of times
      for(var i=0; i<parseInt(tmp[1]); i++) {
        plaintext += tmp[2];
      }
    } else {
			// otherwise just fill the letter once
			plaintext += tmp[0];
		}
    ciphertext = ciphertext.substring(tmp[0].length,ciphertext.length);
//    console.log('cipher reduced to: '+ciphertext);
	}
	return plaintext;
};

module.exports = new RLE();
