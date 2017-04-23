// Not to be confused with bizz buzz
// 3, 5, 7 : Pling, Plang, Plong
var Raindrops = function() {};

Raindrops.prototype.convert = function(num) {
  var factors = this.findFactors(num),
      returnString = '';
  factors.forEach(function(i) {
    switch (i) {
      case 3:
      returnString += 'Pling';
      break;
      case 5:
      returnString += 'Plang';
      break;
      case 7:
      returnString += 'Plong';
      break;
    }
  });
  if(returnString === '') {
//    console.log('No matches: returning: '+num);
    return num.toString();
  } else {
//    console.log('Matches found. returning: '+returnString);
    return returnString;
  }
};

Raindrops.prototype.findFactors = function(num) {
    var half = Math.floor(num / 2),
        str = [],
        i,
        j;
    // Determine our increment value for the loop and starting point.
    num % 2 === 0 ? (i = 2, j = 1) : (i = 3, j = 2);
    for (i; i <= half; i += j) {
        num % i === 0 ? str.push(i) : false;
    }
    str.push(num);
    return str;
};

module.exports = Raindrops;
