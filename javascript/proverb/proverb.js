// For want of a nail the shoe was lost.
// For want of a shoe the horse was lost.
// For want of a horse the rider was lost.
// For want of a rider the message was lost.
// For want of a message the battle was lost.
// For want of a battle the kingdom was lost.
// And all for the want of a horseshoe nail.

// Generates a proverb in the above-style from the given 2+ parameters
var Proverb = function() {
  this.phrase = '';

  // If the final argument is a string (without a qualifier i.e.: 'horseshoe' nail)
  if(typeof arguments[arguments.length-1] === 'string') {
    for(var i=0; i<arguments.length-1; i++) {
      this.phrase += 'For want of a '+arguments[i]+' the '+arguments[i+1]+' was lost.\n'
    }
    this.phrase += 'And all for the want of a '+arguments[0]+'.';
  } else { // includes a qualifier i.e.: 'horseshoe' nail, therefore stop adding lines before it
    for(var i=0; i<arguments.length-2; i++) {
      this.phrase += 'For want of a '+arguments[i]+' the '+arguments[i+1]+' was lost.\n'
    }
    this.phrase += 'And all for the want of a '+arguments[arguments.length-1].qualifier+' nail.'
  }
};

// Returns the formatted proverb phrase
Proverb.prototype.toString = function() {
  return this.phrase;
};

module.exports = Proverb;
