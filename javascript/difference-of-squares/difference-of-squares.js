// Finds the difference between the sum of the squares and
// the square of the sum of the first N natural numbers.
module.exports = function(n) {
  this.n = n;
  // Calculates the sum of any number 1 through N, then raises the sum to the power of 2
  this.squareOfSums = Math.pow(((1 + n)*(n/2)), 2);
  // Calculates the sum of the square of all numbers 1 through N
  this.sumOfSquares = 0;
  for(var i=1; i<=n; i++) {
    this.sumOfSquares += Math.pow(i,2);
  }
  this.difference = this.squareOfSums - this.sumOfSquares;
};
