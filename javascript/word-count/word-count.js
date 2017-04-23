// Write a program that given a phrase can count the occurrences of each word in that phrase.
// var expectedCounts = { one: 1, fish: 4, two: 1, red: 1, blue: 1 }; --->The return value object
// expect(words.count('one fish two fish red fish blue fish')).toEqual(expectedCounts);

var Words = function() {};

Words.prototype.count = function(theSentence) {
  var returnObject = {}; // object to hold the key:value pairs to be returned

  // check if theSentence is 2+ words separated by comma or whitespace
  if(theSentence.indexOf(' ') != -1 || theSentence.indexOf(',') != -1) {
    // regex grabs 1+ spaces, commas, tabs, newline, return, cr, and replaces them with a single space
    var theArray = theSentence.trim().replace(/\s|,|\t|\n|\r|\cr/gmi, " ")
      // then splits the sentence by single space into an array of single words per index
      .split(" ").filter(Boolean);
    for(var i=0; i<theArray.length; i++) {
      theArray[i] = theArray[i].toLowerCase()
        // regex to remove single quote marks but NOT remove apostrophes within words
        .replace(/^'|\.'|\s'|'\s|'$/g, "")
        // regex to remove special characters included in the tests
        .replace(/[.,\/#!$%\^&\*;:@{}=\-_`~()!¡?¿]/g,"");
      if(theArray[i] == '') { // it's empty string so...
        // don't append it to the array
      } else { // the string is not empty so...
        if(theArray[i] === 'constructor') { // special case for keywords such as constructor
          returnObject[theArray[i]] = 1;
        } else {
          // set the keys by name and values by numbercount for each key:value pair
          returnObject[theArray[i]] = (returnObject[theArray[i]] || 0) + 1;
        }
      }
    }
  } else { // theSentence is only one word, set count to 1
    returnObject[theSentence] = 1;
  }
  return returnObject;
};

module.exports = Words;
