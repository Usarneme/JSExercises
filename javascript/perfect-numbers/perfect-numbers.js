// - **Perfect**: aliquot sum = number
// - **Abundant**: aliquot sum > number
// - **Deficient**: aliquot sum < number
var PerfectNumbers = function() {};

PerfectNumbers.prototype.classify = function(num) {
  if(num < 1) {
    return 'Classification is only possible for natural numbers.';
  }
  var sum = sumOfPrimes(num);
  if(sum < num) {
    return 'deficient';
  } else if(sum > num) {
    return 'abundant';
  } else {
    return 'perfect';
  }
};

sumOfPrimes = function(number) {
  var sum = 0;
  for(var i=1; i<=number/2; i++) {
    if(number%i === 0) {
      sum += i;
    }
  }
  return sum;
};

module.exports = PerfectNumbers;
