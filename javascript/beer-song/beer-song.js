var BeerSong = function() {};

// defined responses for 2, 1, or 0 bottles remaining with specific formatting reuired by the tests
var responseList = {
      0: 'No more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.\n',
      1: '1 bottle of beer on the wall, 1 bottle of beer.\nTake it down and pass it around, no more bottles of beer on the wall.\n',
      2: '2 bottles of beer on the wall, 2 bottles of beer.\nTake one down and pass it around, 1 bottle of beer on the wall.\n'
};

// get a single verse of the beer song with the inputNumber parameter for number of current beers
BeerSong.prototype.verse = function(inputNumber) {
  if(inputNumber > 2) {
    // the phrase is the same for any number of beers 3-99
    var returnPhrase = inputNumber+' bottles of beer on the wall, '+inputNumber+' bottles of beer.\nTake one down and pass it around, '+(inputNumber-1)+' bottles of beer on the wall.\n';
    return returnPhrase;
  } else {
    // use the pre-formatted list for 2,1,0 beers
    return responseList[inputNumber];
  }
}

// sing the verses between a supplied high and low number of bottles parameter
BeerSong.prototype.sing = function(high, low) {
  var returnPhrase = '';
  if (low === undefined) {
    // sing the rest of the verses starting at the high number
    for(var i=high; i>=0; i--) {
      // append the verse plus a newline to separate each verse
      returnPhrase += this.verse(i)+'\n';
    }
  } else {
    // sing the verses between the two numbers, including the low number (inclusive)
    for(var i=high; i>=low; i--) {
      // append the verse plus a newline to separate each verse
      returnPhrase += this.verse(i)+'\n';
    }
  }
  // remove the final newline so it exactly matches formatted responses
  returnPhrase = returnPhrase.substring(0,(returnPhrase.length-1));
  return returnPhrase;
}

module.exports = BeerSong;
