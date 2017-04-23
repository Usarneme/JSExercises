var Pangram = function(inputWord) {
  this.inputWord = inputWord;
};

Pangram.prototype.isPangram = function() {
  // if it's an emply string
  if (this.inputWord === '') {
    // it is not a pangram
    return false;
  } else {
    // remove uppercase characters from the inputWord
    this.inputWord = this.inputWord.toLowerCase();
    // each matched instance of an individual character a-z increments a counter
    // if at the end of the phrase the counter reaches 26 characters, it is a pangram
    // if the counter had not reached 26 then it is not a pangram and returns false
    return (this.inputWord.match(/([a-z])(?!.*\1)/g) || []).length === 26;
  }
};

module.exports = Pangram;
