var Hamming = function() {
};

Hamming.prototype.compute = function(first, second) {
  var nonmatching = 0; // number of nonmatching characters in each snippet, default 0
  try {
    if(first.length != second.length) { throw 'Not same length error'; }
    else if(first == second) { // both snippets are the same
      return nonmatching; // return 0
    } else { // both snippets are not the same
      for(var i=0; i<first.length; i++) {
        if(first.charAt(i) != second.charAt(i)) {
          nonmatching++;
        }
      }
    return nonmatching;
    } //end of compare each individual character

  } catch (e) {
      throw new Error('DNA strands must be of equal length.');
    } //end of catch
};

module.exports = Hamming;
