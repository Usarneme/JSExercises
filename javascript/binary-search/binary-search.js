/* Performs a binary search on the provided sorted list
*  @param list : Items to search through.
*  @return : The index of the item if found, -1 if not. */
var binarySearch = function(list) {
  // Test to ensure the list is sorted
  if (list.isSorted()) {
    this.array = list;
  }
};

Array.prototype.isSorted = function() {
  var sorted = this.slice(0).sort(function(a, b) {
    // (+var) casts to a Number type
    return (+a) - (+b);
  });
  for (var i=0; i <this.length; i++) {
    if (this[i] !== sorted[i]) {
      return false;
    }
  }
  return true;
};

// Function indexOf returns the index of the item if found, if not -1 is returned.
binarySearch.prototype.indexOf = function(item) {
  var min = 0;
  var max = this.array.length - 1;
  var guess;

  while (min <= max) {
    guess = Math.floor((min + max) / 2);

    if (this.array[guess] === item) {
      return guess;
    }
    else {
      if (this.array[guess] < item) {
        min = guess + 1;
      }
      else {
        max = guess - 1;
      }
    }
  }
  return -1;
};

module.exports = binarySearch;
