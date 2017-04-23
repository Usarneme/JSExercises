
var Matrix = function(stringVal) {
//  console.log('\nNEW Matrix with stringVal: \n'+stringVal);

  this.rows = [];
  this.columns = [];

  var fullArray = stringVal.split("\n").map(function(element) {
    return element.split(" ").map(Number);
  });

  // get rows
  for(var i=0; i<fullArray.length; i++) {
    this.rows[i] = fullArray[i];
  }

  // get columns
  var cols = [];
  for(var j=0; j<this.rows[0].length; j++) {
    for(var k=0; k<this.rows.length; k++) {
      cols[k] = this.rows[k][j];
    }
    this.columns[j] = [...cols]
  }

  // to hold the highest values in each row
  this.rowHigh = [];
  for(var m=0; m<this.rows.length; m++) {
    this.rowHigh[m] = Math.max(...this.rows[m]);
  }

  // to hold the lowest values in each column
  this.columnLow = [];
  for(var n=0; n<this.columns.length; n++) {
    this.columnLow[n] = Math.min(...this.columns[n]);
  }

  this.saddlePoints = [];

  // for each row
  for(var o=0; o<this.rows.length; o++) {
    // for each item in that row
    for(var p=0; p<this.rows[o].length; p++) {
      // check if the row item is >= any other item in that row
      // and also that the item is <= any other item in that column
      if(this.rows[o][p] === this.rowHigh[o] && this.rows[o][p] <= this.columnLow[p]) {
        this.saddlePoints.push([o,p]);
      }
    }
  }

};

module.exports = Matrix;
