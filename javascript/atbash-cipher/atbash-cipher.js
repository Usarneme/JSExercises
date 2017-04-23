const plain = 'abcdefghijklmnopqrstuvwxyz',
      cypher = 'zyxwvutsrqponmlkjihgfedcba';

var Atbash = {

  // encodes the provided string, letter by letter, using the Atbash Cypher
  encode: function(word) {
    word = word.toLowerCase().replace(/[^\w]/g, '');
    var res = '';
    for(var i=0; i<word.length; i++) {
      // if it's a number just pass it through
      if( word[i].match(/[0-9]/g) ) {
        res += word[i];
      } else {
        res += cypher[plain.indexOf(word[i])];
      }
    }

    // Longer strings have their output formatted before being returned
    if(res.length > 5) {
      return this.format(res, 5).join(' ');
    } else {
      return res;
    }
  },

  // Format function allows adding an arbitrary character str to every Nth position/index
  format: function(str, n) {
    var ret = [],
        i,
        len;
    for(i = 0, len = str.length; i < len; i += n) {
       ret.push(str.substr(i, n))
    }
    return ret;
  },

  decode: function(word) {
    var res = '';
    for(var i=0; i<word.length; i++) {
      res += plain[cypher.indexOf(word[i])];
    }
    return res;
  }

};

module.exports = Atbash;
