// 0-9 drawn digits
const digits = [
  " _ \n| |\n|_|\n   ",
  "   \n  |\n  |\n   ",
  " _ \n _|\n|_ \n   ",
  " _ \n _|\n _|\n   ",
  "   \n|_|\n  |\n   ",
  " _ \n|_ \n _|\n   ",
  " _ \n|_ \n|_|\n   ",
  " _ \n  |\n  |\n   ",
  " _ \n|_|\n|_|\n   ",
  " _ \n|_|\n _|\n   "
];

var OCR = function() {};

OCR.prototype.convert = function(pictorial) {
//  console.log('\nArguments: '+JSON.stringify(arguments)+'\n'+arguments[0]+' with equivalent: '+digits.indexOf(arguments[0]) );

  var retVal = '',
      line,
      numberOfNewlines = pictorial.split('\n');

  // A multiple line pictorial input has more than 4 newline characters
  if( numberOfNewlines.length > 4 ) {

    var len = pictorial.length+1;
    // finds all characters in groups in sizes of 1/3rd the length - 1, to 1/3rd the length
    // the minus 1 is to include the last line in a multiline input as it is shorter than the previous lines
    var splitter = "[\\s\\S]{"+((len/3)-1)+","+(len/3)+"}";
    var reggie = new RegExp(splitter,'g');
    line = pictorial.match(reggie);
//    console.log('LINE: \n'+line);

    for(var i=0; i<line.length; i++) {
      var tmp;
      // the final input in a multi-line input does not have a trailing newline to remove
      if(line.length === (i+1)) {
        tmp = line[i];
      } else {
        // the other objects have an extra newline that needs to be stripped
        tmp = line[i].substring(0,line[i].lastIndexOf('\n'));
      }
      retVal += this.convert(tmp);
      // tests dictate multiline inputs should have each line's output separated by a comma
      retVal += ',';
    }
  } else {
    // single character (4 lines X 3 characters) pictorial input
    line = pictorial.split('\n');

    // if it's more than a single pictorial number...
    if(line[0].length > 3) {
      // split it up and run convert on it's parts
      var leftDigit = '',
          remaining = '';

      leftDigit += line[0].substring(0,3)+'\n'+
                   line[1].substring(0,3)+'\n'+
                   line[2].substring(0,3)+'\n'+
                   line[3].substring(0,3) || line[3].substring(0,2);

      retVal += this.convert(leftDigit);

      remaining += line[0].substring(3,line[0].length)+'\n'+
                   line[1].substring(3,line[1].length)+'\n'+
                   line[2].substring(3,line[2].length)+'\n'+
                   line[3].substring(3,line[3].length);

      retVal += this.convert(remaining);

    } else {
      var phrase = ''+digits.indexOf(pictorial);
      if(phrase == -1) {
        return '?';
      } else {
        retVal += phrase;
      }
    }

  } //end of numberOfNewlines.length < 4

  // Clean up any extra commas for multiple line inputs
  if(retVal[retVal.length-1] === ',') {
    retVal = retVal.substring(0,retVal.length-1);
  }
//  console.log('Returning: '+retVal);
  return retVal;
};


module.exports = new OCR;
