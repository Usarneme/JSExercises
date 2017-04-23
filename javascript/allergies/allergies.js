// * eggs (1) 2^0
// * peanuts (2) 2^1
// * shellfish (4) 2^2
// * strawberries (8) 2^3
// * tomatoes (16) 2^4
// * chocolate (32) 2^5
// * pollen (64) 2^6
// * cats (128) 2^7

const allergens = [
  'eggs',
  'peanuts',
  'shellfish',
  'strawberries',
  'tomatoes',
  'chocolate',
  'pollen',
  'cats'
];

// Generates a list of allergens in the this.allergies array
// The @param number provided is 2^N where N is less than 8
var Allergies = function(number) {
  this.allergies = [];
  var tmp = number;

  // for each value 2^N, where 0 <=n < 8
  for(var i=7; i>=0; i--) {
    // if the value is 0 or below...
    // there are no more allergens to be appended, break the loop
    if( tmp <= 0 ) { break; }
    // if the value less 2^N is non-negative...
    if( (tmp - Math.pow(2,i)) >= 0 ) {
      // subtract 2^N from the value
      tmp -= Math.pow(2,i);
      // and append the allergen which corresponds with that N value to the this.allergies array
      this.allergies.push(allergens[i]);
    }
  }
};

// Returns an array containing all allergens
Allergies.prototype.list = function() {
  // Since the array is ordered highest N to lowest N...
  // reverse the order before returning
  return this.allergies.reverse();
};

// Query returns true/false for a single provided @param allergen
Allergies.prototype.allergicTo = function(allergen) {
  var bool = false;
  this.allergies.forEach(function(i) {
    if(allergen === i) {
      bool = true;
    }
  });
  return bool;
};

module.exports = Allergies;
