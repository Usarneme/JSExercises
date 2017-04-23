/* Series converts a provided String of digits into an array
/  which contain the value of each individual digits */
var Series = function() {
  this.digits = arguments[0].split('').map(function(i) { return parseInt(i) });
};

/* The Slices function splits the digits into chunks
/ of length @param len and returns an array of values
/ of the provided chunk length. If the requested chunk length
/ is greater than 1, an array of arrays is returned */
Series.prototype.slices = function(len) {

  var returnValuesArray = [],
      workingValuesArray = [],
      combinedString = this.digits.join('');

  // The sliced chunks must not be longer than the this.digits length
  if(this.digits.length >= len) {

    for(var i=0; i<=combinedString.length-len; i++) {
      var curr = combinedString.substring(i,(i+len));

      [curr].forEach(function(i) {
        workingValuesArray.push( [i] );
      });
    }

    workingValuesArray.forEach(function(i) {
      // If the working array value is more than a single character
      if( i.toString().length > 1 ) {
        // Split the characters into their own array and append to the return array
        var splitter = [];
        // The tests require an Array of Arrays be returned rather than an array of strings etc.
        i.toString().split('').forEach(function(j) {
          splitter.push( parseInt(j) );
        });
        // Concat the array into the returnValues array (array of arrays)
        returnValuesArray = [...returnValuesArray, [...splitter] ];
      } else {
        // Else append each single character to the return array
        returnValuesArray.push( [parseInt( i )] );
      }
    });
    // Return the built up array of arrays
    return returnValuesArray;
  } else {
    // The split length cannot be greater than the total digits in this.digits
    throw new Error('Slice size is too big.');
  }
};

module.exports = Series;
