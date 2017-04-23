FoodChain = function() {};

// Returns a single verse of the specified verse @parameter
FoodChain.prototype.verse = function(verse) {
  return expected[verse];
};

// Returns multiple verses between the range @paramters lower-higher
FoodChain.prototype.verses = function(lower, higher) {
  // for each verse in the provided range (inclusive <=)
  var returnValues = '';
  for(var i=lower; i<=higher; i++) {
    returnValues += this.verse(i);
  }
  return returnValues;
};

module.exports = FoodChain;

var expected = [];
expected.push('0 index is not used.');
expected.push('I know an old lady who swallowed a fly.\nI don\'t know why she swallowed the fly. Perhaps she\'ll die.\n');
expected.push('I know an old lady who swallowed a spider.\nIt wriggled and jiggled and tickled inside her.\n' +
'She swallowed the spider to catch the fly.\n' +
'I don\'t know why she swallowed the fly. Perhaps she\'ll die.\n');
expected.push('I know an old lady who swallowed a bird.\n' +
'How absurd to swallow a bird!\n' +
'She swallowed the bird to catch the spider that wriggled and jiggled and tickled inside her.\n' +
'She swallowed the spider to catch the fly.\n' +
'I don\'t know why she swallowed the fly. Perhaps she\'ll die.\n');
 expected.push('I know an old lady who swallowed a cat.\n' +
'Imagine that, to swallow a cat!\n' +
'She swallowed the cat to catch the bird.\n' +
'She swallowed the bird to catch the spider that wriggled and jiggled and tickled inside her.\n' +
'She swallowed the spider to catch the fly.\n' +
'I don\'t know why she swallowed the fly. ' +
'Perhaps she\'ll die.\n');
expected.push('I know an old lady who swallowed a dog.\n' +
'What a hog, to swallow a dog!\n' +
'She swallowed the dog to catch the cat.\n' +
'She swallowed the cat to catch the bird.\n' +
'She swallowed the bird to catch the spider that wriggled and jiggled and tickled inside her.\n' +
'She swallowed the spider to catch the fly.\n' +
'I don\'t know why she swallowed the fly. ' +
'Perhaps she\'ll die.\n');
expected.push('I know an old lady who swallowed a goat.\n' +
'Just opened her throat and swallowed a goat!\n' +
'She swallowed the goat to catch the dog.\n' +
'She swallowed the dog to catch the cat.\n' +
'She swallowed the cat to catch the bird.\n' +
'She swallowed the bird to catch the spider that wriggled and jiggled and tickled inside her.\n' +
'She swallowed the spider to catch the fly.\n' +
'I don\'t know why she swallowed the fly. ' +
'Perhaps she\'ll die.\n');
expected.push('I know an old lady who swallowed a cow.\n' +
'I don\'t know how she swallowed a cow!\n' +
'She swallowed the cow to catch the goat.\n' +
'She swallowed the goat to catch the dog.\n' +
'She swallowed the dog to catch the cat.\n' +
'She swallowed the cat to catch the bird.\n' +
'She swallowed the bird to catch the spider that wriggled and jiggled and tickled inside her.\n' +
'She swallowed the spider to catch the fly.\n' +
'I don\'t know why she swallowed the fly. ' +
'Perhaps she\'ll die.\n');
expected.push('I know an old lady who swallowed a horse.\n' + 'She\'s dead, of course!\n');
