// Returns an array of prime factors of a given number
var primeFactors = {
  returnArray: [],
  for: function(number) {

    // for each index number up to and including the provided number (excluding 1)
    for(var i=2; i<=number; i++) {
      // if the number is 2, push 2 and escape the loop
      if(number === 2) {
        this.returnArray.push(2);
        break;
      }

      // if the number divides evenly by the index
      if(number%i === 0) {
        // append the index as a prime factor and
        this.returnArray.push(i);
        // find the prime factor of the resulting quotient of the number/index
        this.for( (number/i) );
        break;
      }
    }
    return this.returnArray;
  } //end of for function
};

module.exports = primeFactors;
