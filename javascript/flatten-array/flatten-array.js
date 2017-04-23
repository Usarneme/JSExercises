
var Flattener = function() {};

Flattener.prototype.flatten = function(nestedArrays) {

  if(nestedArrays.length === 1) {
    return [];
  }

  var dirtyArray = nestedArrays.join().split(','),
      cleanArray = [];

  // Remove any null values and convert Strings to numbers
  dirtyArray.forEach(function(i) {
    if( i ) {
      cleanArray.push( parseInt(i) );
    }
  });

  return cleanArray;
};

module.exports = Flattener;
