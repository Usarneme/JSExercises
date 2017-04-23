// Translate an English word or phrase into Pig Latin
var pigLatin = function() {};

pigLatin.prototype.translate = function(english) {
//  console.log('Translating English word: '+english);

  var words = english.split(' '),
      retStr = '';

  for(var i=0; i<words.length; i++) {
    // variables to hold the first vowel in the word and it's index location
    var firstVowel = words[i].match(/[aeiou]/g)[0],
        loc = words[i].indexOf(firstVowel);
//    console.log('First vowel: '+firstVowel+' at loc: '+loc);

    // contains q followed by u
    if( words[i].match(/^[a-z]+qu|qu/g) ) {
//      console.log('Contains qu. Word: '+words[i]+'. First vowel: '+firstVowel+'. At loc: '+loc);
      retStr += words[i].substring(loc+1, words[i].length) + words[i].substring(0,loc+1) + 'ay ';

    // starts with a vowel
    } else if ( loc === 0 ) {
      retStr += words[i] + 'ay ';

    // doesn't start with a vowel
    } else {
      retStr += words[i].substring(loc, words[i].length) + words[i].substring(0,loc) + 'ay ';
    }
  }
  // return the composite string, less the trailing space
  return retStr.trim();
};

module.exports = new pigLatin;
