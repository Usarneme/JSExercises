// A strain for separating objects into one of two categories (keep and discard)
var Strain = {

  // Keep function separates out unwanted elements from the array @param input
  // by removing any elements that return false from the function @param func
  keep: function(input, func) {
    var retArr = [];
    // if the provided array contains 1+ elements...
    if(input.length > 0) {
      // for each of those elements
      input.forEach(function(i) {
        // if the element returns true from the provided function...
        if ( func(i) ) {
          // append that true element to the return object array
          retArr.push(i);
        }
      });
    }
    return retArr;
  },

  // Opposite of keep
  discard: function(input, func) {
    var retArr = [];
    if(input.length > 0) {
      input.forEach(function(i) {
        // if the element returns false from the provided function...
        if ( !func(i) ) {
          retArr.push(i);
        }
      });
    }
    return retArr;
  }
};

module.exports = Strain;
