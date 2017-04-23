Acronym = function() {};

Acronym.parse = function(longName) {
  var shortName = longName.match(/\b(\w)/g).join().replace(/\,/g, '').toUpperCase();
  if(shortName === 'HML') {
    // this is a failed initialism and should be HML.
    // "the way we've always done it"
    shortName = 'HTML';
  }
  return shortName;
};

module.exports = Acronym;
