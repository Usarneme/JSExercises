var numSet = {
    1 : 'one',
    2 : 'two',
    3 : 'three',
    4 : 'four',
    5 : 'five',
    6 : 'six',
    7 : 'seven',
    8 : 'eight',
    9 : 'nine',
    10 : 'ten',
    11 : 'eleven',
    12 : 'twelve',
    13 : 'thirteen',
    14 : 'fourteen',
    15 : 'fifteen',
    16 : 'sixteen',
    17 : 'seventeen',
    18 : 'eighteen',
    19 : 'nineteen',
    20 : 'twenty',
    30 : 'thirty',
    40 : 'forty',
    50 : 'fifty',
    60 : 'sixty',
    70 : 'seventy',
    80 : 'eighty',
    90 : 'ninety'
  };

var Say = function() {};

Say.prototype.inEnglish = function(num) {
//  console.log('\nINE with num: '+num);

  if(num > 999999999999 || num < 0) {
    throw new Error('Number must be between 0 and 999,999,999,999.');
  }

  var phrase = '',
      remaining = num;

  // variables to hold the individual values from each place
  var ones = Math.floor(num % 10),
      tens = Math.floor(num / 10 % 10),
      hundreds = Math.floor(num / 100 % 10),
      thousands = Math.floor(num % 10000 / 1000),
      tenThousands = Math.floor(num % 100000 / 10000),
      hundredThousands = Math.floor(num % 1000000 / 100000),
      millions = Math.floor(num % 10000000 / 1000000),
      tenMillions = Math.floor(num % 100000000 / 10000000),
      hundredMillions = Math.floor(num % 1000000000 / 100000000),
      billions = Math.floor(num % 10000000000 / 1000000000),
      tenBillions = Math.floor(num % 100000000000 / 10000000000),
      hundredBillions = Math.floor(num % 1000000000000 / 100000000000),
      retPhrase = '';
      // console.log('HunBil: '+hundredBillions+
      //           ', \nTenBil: '+tenBillions+
      //           ', \nBil: '+billions+
      //           ', \nHundMil: '+hundredMillions+
      //             ', \ntenMil: '+tenMillions+
      //             ', \nMil: '+millions+
      //             ', \nHunThous: '+hundredThousands+
      //             ', \nTenThous: '+tenThousands+
      //             ', \nThos: '+thousands+
      //             ', \nHuns: '+hundreds+
      //             ', \nTens: '+tens+
      //             ', \nOnes: '+ones);

  if(num === 0) { return 'zero'; }

  // Checks for values in each of the digits
  if(hundredBillions === 0) {} else {
    phrase += numSet[hundredBillions]+' hundred ';
  }
  if(tenBillions === 0) {}
    else if(tenBillions === 1) { billions = 10+millions; tenBillions = 0; }
      else {
        phrase += numSet[tenBillions*10]+'-';
      }
  if(billions === 0) {} else {
    phrase += numSet[billions]+' billion ';
  }
  if(hundredMillions === 0) {} else {
    phrase += numSet[hundredMillions]+' hundred ';
  }
  if(tenMillions === 0) {}
    else if(tenMillions === 1) { millions = 10+millions; tenMillions = 0; }
      else {
        phrase += numSet[tenMillions*10]+'-';
      }
  if(millions === 0) {} else {
    phrase += numSet[millions]+' million ';
  }
  if(hundredThousands === 0) {} else {
    phrase += numSet[hundredThousands]+' hundred ';
  }
  if(tenThousands === 0) {}
    else if(tenThousands === 1) { thousands = 10+thousands; tenThousands = 0; }
      else {
        phrase += numSet[tenThousands*10]+'-';
      }
  if(thousands === 0) {} else {
    phrase += numSet[thousands]+' thousand ';
  }
  if(hundreds === 0) {} else {
    phrase += numSet[hundreds]+' hundred ';
  }
  if(tens === 0) {}
    else if(tens === 1) { ones = 10+ones; tens = 0; }
      else {
        phrase += numSet[tens*10]+'-';
      }
  if(ones === 0) {} else {
    phrase += numSet[ones];
  }

  //cleanup
  if(phrase.substring(phrase.length-1, phrase.length) === '-' || phrase.substring(phrase.length-1, phrase.length) === ' ') {
    phrase = phrase.substring(0, phrase.length-1);
  }

  return phrase;
};

module.exports = new Say;
