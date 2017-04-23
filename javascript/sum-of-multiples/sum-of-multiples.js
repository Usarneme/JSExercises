// Given a number, find the sum of all the multiples of
// particular numbers up to but not including that number.
SumOfMultiples = function(arr) {
  this.multiples = arr.sort(function(a,b) { return a-b; }) || [];

  this.to = function(val) {
    var mults = this.multiples,
        retVal = 0,
        multArr = [];

    mults.forEach(function(multiple) {
      // get the multiples of the lowest multiple number through the value exclusive
      for(var i=mults[0]; i<val; i++) {
        // if the value is a multiple the modulo remainder should be 0
        if(i%multiple === 0) {
          multArr.push(i);
        }
      }
    });

    // Remove duplicate/shared entries added by the different multiples
    Array.from(new Set([...multArr])).forEach(function(num) {
      // and sum them
      retVal += num;
    });

    return retVal;
  };

  return this;
};

module.exports = SumOfMultiples;
