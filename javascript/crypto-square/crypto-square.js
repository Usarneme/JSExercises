// Crypto encodes text using a rectangular transpositional mutation
var Crypto = function(input) {
  this.text = input;
  this.normalized = this.normalizePlaintext();
  this.segments = [];
  this.cipher = [];

  // Creates a rectangle with sides equal to columns x rows
  // Columns and rows are even or if not possible column = row+1
  this.column = Math.ceil(Math.sqrt(this.normalized.length));
  // if the lengths of both are the same...
  if(Math.pow(this.column,2) === this.normalized.length) {
    // the row and column length are set equal
    this.row = this.column;
  } else {
    // the row length is set to 1 less than the column length
    this.row = this.column - 1;
  }
};

// Removes non-word characters and spaces, set all chars to lower case
Crypto.prototype.normalizePlaintext = function() {
  return this.text.replace(/[^\w]/g, '').toLowerCase().trim();
};

// Returns the size of the cipher's column length
Crypto.prototype.size = function() {
  return this.column;
};

// Breaks the noramlized plaintext into chunks of length = this.column.length
Crypto.prototype.plaintextSegments = function() {
  return format(this.normalizePlaintext(), this.column);
};

// Returns a string encrypted using the crypto-square cipher
Crypto.prototype.ciphertext = function() {
  this.segments = format(this.normalizePlaintext(), this.column);
  var retArr = [];

  // for each word in the segmented list...
  for(var j=0; j<this.segments.length; j++) {
    // for each character in the current word...
    for(var i=0; i<this.segments.length; i++) {
      // if it is a non-blank element
      // i:j order is to traverse each Nth element in the segmented list of elements
      // i.e.: get all 0 index elements, then all 1st index elements, so on
      if(this.segments[i][j]) {
        // append it to the return array
        retArr.push(this.segments[i][j]);
      }
    }

  }
  return retArr.join('');
};

// Format function adds an arbitrary character to every Nth index of String
var format = function(str, n) {
  var ret = [],
      i,
      len;
  for(i = 0, len = str.length; i < len; i += n) {
     ret.push(str.substr(i, n))
  }
  return ret;
};

module.exports = Crypto;
