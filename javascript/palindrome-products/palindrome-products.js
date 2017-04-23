/*
Given a range of integers, returns the smallest or largest
palindromic product within that range, along with all of it's factors
*/
var Palindromes = function(range) {
//  console.log('\nPAL with range: '+JSON.stringify(range)+' max: '+range.maxFactor+' min: '+range.minFactor);
  this.max = range.maxFactor;
  this.min = range.minFactor || 1;
  this.palindromeProducts = [];

  // this.value is a palindrome, the result of either the largest() or smallest() function
  this.value = 0;
  // this.factors is an array containing all of the factors that result in this.value
  this.factors = [];
  // this.factor contains the largest or smallest factor for this.value
  this.factor = [];
};

// generate the set of palindrome products
Palindromes.prototype.generate = function() {
  // 1.create a set of numbers of all products min through max
  var completeProductSet = [];
  // for every number in the range min-max...
  for(var i=this.min; i<=this.max; i++) {
    // for every product min-max
    for(var j=this.min; j<this.max; j++) {
      // append the product
      completeProductSet.push(i*j);
    }
  }
  // 2.remove any non-unique values from the set and sort smallest to largest
  var uniqueProductSet = unique(completeProductSet).sort(function(a, b) { return a - b; });
//  console.log('GEN uniqueProductSet: '+uniqueProductSet);

  // 3.append each value that is palindromic to this.palindromeProducts
  for(value in uniqueProductSet) {
    if(isPalindrome( ''+uniqueProductSet[value]) ) {
      this.palindromeProducts.push(uniqueProductSet[value]);
    }
  }
//  console.log('GEN pal products: '+this.palindromeProducts);

};

// Sets the largest palindrome pair product (this.value), it's factor list,
// and it's largest factor from the this.palindromeProducts set
Palindromes.prototype.largest = function() {
//  console.log('LARG this.palindromeProducts: '+this.palindromeProducts);
  // set this.value to the largest palindrome product from the list
  this.value = this.palindromeProducts[this.palindromeProducts.length-1];
//  console.log('LARG this.value set to: '+this.value);
  this.factors = [...factorPairs(this.value)];
  this.factor = [this.factors[this.factors.length-1]];
//  console.log('LARG this.factors set to: '+this.factors);
  return this;
};

// Same/opposite of largest()
Palindromes.prototype.smallest = function() {
  this.value = this.palindromeProducts[0];
  this.factors = [...factorPairs(this.value)];
  this.factor = [this.factors[this.factors.length-1]];
  return this;
};

// Returns true if the provided string is a palindrome
var isPalindrome = function(str) {
  var len = Math.floor(str.length / 2);
  for (var i=0; i<len; i++) {
    if (str[i] !== str[str.length - i - 1]) {
//      console.log('ISP False checking: '+str);
      return false;
    }
  }
//  console.log('ISP True checking: '+str);
  return true;
};

// Returns an array of factor pairs for a provided number
// (e.g.: num=10, result=[(1,10),(2,5)])
var factorPairs = function(num) {
	var maxDivisor = Math.sqrt(num);
	var output = [];

	for (var i=1; i<=maxDivisor; i++) {
		var result = num/i;
		var intResult = Math.floor(result);
    // compare integer answer and division answer
		if(result == intResult) {
      var formatted = [];
      formatted.push(i);
      formatted.push(result);
			output.push( formatted );
		}
	}
//  console.log('FACTOR PAIRS returning: '+output);
  return output;
};

// Takes an array arr and returns a new array containing only unique values (removes duplicates)
var unique = function(arr) {
  return Array.from(new Set(arr));
};

module.exports = Palindromes;
