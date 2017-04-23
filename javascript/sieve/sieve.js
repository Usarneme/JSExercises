// Sieve of Eratosthenes
// returns an array of prime numbers within the range of
// 2 through the provided @param upperLimit value
var Sieve = function(upperLimit) {
  this.upperLimit = upperLimit;
  this.primes = this.findPrimes();
};

Sieve.prototype.findPrimes = function() {
  var retArr = [],
      workingValues = [];
  // Set all values 2-upperLimit to true as a default value
  for(var i=2; i<=this.upperLimit; i++) {
    workingValues[i] = true;
  }
  // Take the square root of upperLimit as an
  // optimization to limit unnecessary looping
  var root = Math.sqrt(this.upperLimit);

  for(var i=2; i<root; i++) {
    // Check to see if our current index is prime, otherwise ignore it.
    if( workingValues[i] === true ) {
      // Loop through i^2 to the upperLimit (inclusive)
      // increment by the above i loop index
      for(var j=(i*i); j<=this.upperLimit; j+=i) {
        workingValues[j] = false;
      }
    } // end of if === true
  } // end of i loop

  // final traversal to grab all primes and append them to the return array
  for(var i=2; i<=this.upperLimit; i++) {
    if(workingValues[i] === true) {
      retArr.push(i);
    }
  }
//  console.log('Returning: '+retArr);
  return retArr;
};

module.exports = Sieve;
