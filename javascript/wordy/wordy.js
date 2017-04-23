/* WordProblem takes a @param question written in text
/  and performs one or more mathematical operation(s).
/  Caveat: this computes left to right, not in the
/  mathematically correct order of operations */
var WordProblem = function(question) {
  var opsList = 'plus minus multiplied divided',
      numbers = [],
      operations = [];

  // Break the question into numbers and operations arrays (don't include the question mark)
  question.substring(0,question.length-1).split(' ').map(function(i) {
    // If it's a number...
    if ( !isNaN(Number(i)) ) {
      // include it in the number array as a number
      numbers.push( parseInt(i,10) );
      // If it's an operation...
    } else if ( opsList.match(i) ) {
      // include it in the operation array
      operations.push(i);
    }
  });

  // Set member variables for method access
  this.mNumbers = [...numbers];
  this.mOperations = [...operations];
};

WordProblem.prototype.answer = function() {
  // If there are not operations to perform...
  if(this.mOperations.length === 0) {
    // Throw an error
    throw ArgumentError();
  }
  var retVal = this.mNumbers[0];

  for(var i=0; i<this.mOperations.length; i++) {
    switch(this.mOperations[i]) {
      case 'plus':
        retVal += this.mNumbers[i+1];
        break;
      case 'minus':
        retVal -= this.mNumbers[i+1];
        break;
      case 'multiplied':
        retVal *= this.mNumbers[i+1];
        break;
      case 'divided':
        retVal /= this.mNumbers[i+1];
        break;
      }
  }
  return retVal;
};

var ArgumentError = function() {
  return new Error("That doesn't look like anything at all to me.");
}

module.exports = {
  WordProblem,
  ArgumentError
};
