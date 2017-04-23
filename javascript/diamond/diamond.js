// Prints a top-bottom and left-right symmetrical diamond of letters
// up to the provided letter which letter sits in the middle row
var Diamond = function() {};

Diamond.prototype.makeDiamond = function(letter, rows) {
  if (rows === undefined){
    rows = new Array();
  }

  var padding = Array(rows.length + 1).join(' ');

  // A is the terminal therefore there is no inner spaces for this case only
  if (letter === 'A') {
    rows.unshift(padding + 'A' + padding);
  } else {
    var innerSpaces = Array((letter.charCodeAt() - 65) * 2).join(' ');
    rows.unshift(padding + letter + innerSpaces + letter + padding);
    this.makeDiamond(String.fromCharCode(letter.charCodeAt() - 1), rows);
  }

  return rows.concat(rows.slice(0, -1).reverse()).join('\n') + '\n';
};

module.exports = Diamond;
