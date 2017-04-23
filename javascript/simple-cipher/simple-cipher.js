/* An encryption program using a simple substitution cipher
* @param key: a 10-letter string to act as a key for encoding/Decoding
*/
var Cipher = function(key) {
  // If no key is provided, use the default value a bunch of a's
  if( key === undefined ) {
    this.key = 'aaaaaaaaaa';
  // Otherwise if it's blank or contains anything other than lowercase a-z characters
  } else if( key === '' || key.match(/[^a-z]/g) ) {
    throw new Error('Bad key');
  } else {
    // Valid key
    this.key = key;
  }
};

// Converts the 10-letter @param plaintext String provided into ciphertext
Cipher.prototype.encode = function(plaintext) {
  // a return string variable
  var retStr = '';
  // for each character in the plaintext String
  for(var i=0; i<plaintext.length; i++) {
    // p and k hold the character code value of the current letter in the plaintext String
    var p = plaintext.charCodeAt(i);
    var k = this.key.charCodeAt(i);
    // Character codes for a-z = 97-122. 26 characters in the set a-z.
    var sum = ((p+k)%97)%26;
    // Convert the character code value to a String character and append to the return String
    retStr += String.fromCharCode( sum+97 );
  }
  return retStr.toLowerCase();
};

// Same as above but the other way. Ciphertext => plaintext
Cipher.prototype.decode = function(ciphertext) {
  var retStr = '';
  for(var i=0; i<ciphertext.length; i++) {
    var c = ciphertext.charCodeAt(i);
    var k = this.key.charCodeAt(i);
    var difference = ((c-k)%97)%26;
    retStr += String.fromCharCode( difference+97 );
  }
  return retStr.toLowerCase();
};

module.exports = Cipher;
