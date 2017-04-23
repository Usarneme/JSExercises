/*
  Pascal's Triangle is created with the number of row's provided and stored
  in the object property this.rows. The last row is also stored per the tests.
*/
var Triangle = function(row) {
  // generate triangle values array
  this.rows = this.generateRows(row);
  this.lastRow = this.rows[this.rows.length-1];
};

// Generates a Palscal's triangle, returning it as an array
// of array's equal to the number of rows provided
Triangle.prototype.generateRows = function(numberOfRows) {
  var retArr = [];
  for(var line=0; line<numberOfRows; line++) {
    retArr[line] = [];
    for(var i=0; i<=line; i++) {
      if(line == i || i == 0) {
        // set beginning and end of each line to 1
        retArr[line][i] = 1;
      } else {
          // set the result to the sum of the previous line's digit and the digit to it's left
          retArr[line][i] = retArr[line-1][i-1] + retArr[line-1][i];
      }
    }
  }
  return retArr;
};

module.exports = Triangle;
