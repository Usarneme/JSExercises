
Queens = function() {
  // If queen positions were provided...
  if(arguments.length > 0) {
    // Check for the error of two queens trying to occupy the same space
    if(arguments[0].black === arguments[0].white) {
      throw new Error('Queens cannot share the same space');
    }
    // otherwise, set the location variables to those provided
    this.black = arguments[0].black;
    this.white = arguments[0].white;
  } else {
    // if no position arguments were provided, use the default locations
    this.black = [7,3];
    this.white = [0,3];
  }

  // Returns a printed game board showing the queens' positions
  this.toString = function() {
    // set coordinate values for the black and white queens and initialize an 8x8 game board/matrix
    var blackX = this.black[0],
        blackY = this.black[1],
        whiteX = this.white[0],
        whiteY = this.white[1],
        gameBoard = matrix(8,8);

    // The formatted array has a single space between each element in a row
    // except after the last element (7th) in a row which has no space
    if(blackY === 7) {
      gameBoard[blackX][blackY] = 'B';
    } else {
      gameBoard[blackX][blackY] = 'B ';
    }
    if(whiteY === 7) {
      gameBoard[whiteX][whiteY] = 'W';
    } else {
      gameBoard[whiteX][whiteY] = 'W ';
    }

    var printed = '';
    for(row in gameBoard) {
      for(column in gameBoard[row]) {
        printed += gameBoard[row][column];
      }
      // add a newline after each row
      printed += '\n';
    }
    return printed;
  } // end of toString()

  // Returns true if two queens are in positions which allow them to attack one another, otherwise false
  this.canAttack = function() {
    // Possible avenues of attack are horizontally, vertically, and diagonally
    if(this.black[0] === this.white[0]
      || this.black[1] === this.white[1]
      || this.diagonal() ) {
        return true;
    }
    return false;
  } // end of canAttack()

  // Returns true if attacks can be made diagonally between queens, else false
  this.diagonal = function() {
    var diffX = Math.abs(this.black[0] - this.white[0]),
        diffY = Math.abs(this.black[1] - this.white[1]);
    if(diffX === diffY) {
      return true;
    }
    return false;
  }

  return this;
};

// Returns a two dimensional array of the provided breadth and depth
var matrix = function(rows, cols) {
  var arr = [];
  for(var i=0; i<rows; i++){
    arr.push([]);
    // Adds cols to the empty line:
    arr[i].push( new Array(cols) );
    for(var j=0; j<cols; j++){
      // Initializes:
      if(j === 7) {
        arr[i][j] = '_';
      } else {
        arr[i][j] = '_ ';
      }
    }
  }
  return arr;
};

module.exports = Queens;
