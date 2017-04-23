var Isogram = function(inputPhrase) {
  this.inputPhrase = inputPhrase;
};

Isogram.prototype.isIsogram = function() {
  return !/(\w).*\1/i.test(this.inputPhrase);
};

module.exports = Isogram;
