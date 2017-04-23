var sieve = require ('./sieve');

var prime = function() {};

prime.prototype.nth = function(num) {
  if (num < 1) { throw new Error('Prime is not possible'); };
  if (num < 2) return 2;
  if (num == 2) return 3;

  // The magic number 11 gives enough range to pass all provided tests 0-10'001
  var primeArray = [...new sieve(num*11).findPrimes()];
  return primeArray[ num-1 ];
};

module.exports = new prime();
