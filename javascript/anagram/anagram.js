// Test if a provided list of possibleAnagrams is an anagram to the provided subjectWord
var Anagram = function(subjectWord) {
  this.subjectWord = subjectWord;
};

// Returns an array with words that are anagrams to this.subjectWord
// if no anagram matches are found, en empty [] array is returned
Anagram.prototype.matches = function() {
  var subjectWord = this.subjectWord, // the subject of the anagram
      returnValues = [], // the empty array to contain anagram matches
      possibleAnagrams = arguments; // input may be a string or array of possible anagram matches, it is not known at this point

  // if an array was provided as arguments
  if( possibleAnagrams[0].constructor === Array ) {
    // for each word in the potential anagram array
    for(var i=0; i<possibleAnagrams[0].length; i++) {
      // check if the current possible anagram is an anagram of the subject word
      // a true anagram is appended to the returnValues array, a false anagram returns a blank value
      returnValues.push(this.checker(possibleAnagrams[0][i], subjectWord));
    }
    // if 1+ strings were provided as arguments
  } else if( possibleAnagrams[0].constructor === String ) {
    // if 2+ potential anagram strings were provided as arguments
    if( (possibleAnagrams.length > 1) ) {
      // check each potential anagram string
      for(var i=0; i<possibleAnagrams.length; i++) {
        // a true anagram is appended to the returnValues array, a false anagram returns a blank value
        returnValues.push(this.checker(possibleAnagrams[i], subjectWord));
      }
      // a single potential anagram string was provided as argument
    } else {
      // a true anagram is appended to the returnValues array, a false anagram returns a blank value
      returnValues.push(this.checker(possibleAnagrams[0], subjectWord));
    }
  } // end of if constructor===string
  // clean up the array by removing empty elements
  return returnValues.filter(function(n){ return n != undefined });
};

Anagram.prototype.checker = function(possibleAnagram, subjectWord) {
  // Anagrams must be the same length
  if(possibleAnagram.length === subjectWord.length) {
    if(possibleAnagram.toLowerCase() === subjectWord.toLowerCase()) {
      // An exact match cannot be an anagram with itself, do not append/return this potential anagram
    } else {
      // working variables to allow for matching character removal
      var currentAnagram = possibleAnagram,
          currentSubject = subjectWord;
      // for each character in the potential anagram...
      for(var j=0; j<possibleAnagram.length; j++) {
        // if case-insensitive letter is in both subject and possible anagram
        if(currentSubject.toLowerCase().indexOf( possibleAnagram[j].toLowerCase() ) > -1) {
          // set variables for the index location of the current matched letter in both subject and potential anagram
          var anaVal = currentAnagram.indexOf( possibleAnagram[j] ),
              subVal = currentSubject.indexOf( possibleAnagram[j] );
          // remove the matched letter from both the current anagram and subject variables
          currentAnagram = ( currentAnagram.substring(0, anaVal)+'!'+currentAnagram.substring((anaVal+1)) ).toLowerCase();
          currentSubject = ( currentSubject.substring(0, subVal)+'!'+currentSubject.substring((subVal+1)) ).toLowerCase();
        } else {
          // the letters do not match
          // no need to keep checking if a single mismatched letter is found
          return;
        }
      } // end of for j

      if (currentAnagram.length === possibleAnagram.length) {
        // the working/current anagram matches each letter in the subject word and is an anagram
        return possibleAnagram;
      } else {
        // the working/current anagram does not match each letter in the subject, do not append to returnValues
      }
    } // end of else result from words not being exactly the same
  } else {
    // lengths are different so they cannot be an anagram
  }
};

module.exports = Anagram;
