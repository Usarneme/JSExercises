// Write a program that calculates the moment when someone has lived for 10^9 seconds.

var Gigasecond = function(inputDate) {
  this.inputDate = inputDate;
};

Gigasecond.prototype.date = function() {
  // takes a Date object as parameter
  // returns the corresponding Date object 10^9 seconds later
  return new Date( (this.inputDate.getTime() + 1000000000000) );
};

module.exports = Gigasecond;
