// * `G` -> `C`
// * `C` -> `G`
// * `T` -> `A`
// * `A` -> `U`

var DnaTranscriber = function() {
};

DnaTranscriber.prototype.toRna = function(input) {
    if(input.length == 1) {
      return changeOne(input);
    } else {
      var result = '';
      for(var i=0; i<input.length; i++) {
        result += changeOne(input.charAt(i));
      }
      return result;
    }
};

changeOne = function(input) {
  switch (input) {
    case 'G':
      return 'C';
      break;
    case 'C':
      return 'G';
      break;
    case 'T':
      return 'A';
      break;
    case 'A':
      return 'U';
      break;
  }
};

module.exports = DnaTranscriber;
