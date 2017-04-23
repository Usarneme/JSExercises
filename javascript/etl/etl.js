const expected = {
  a: 1, b: 3,  c: 3, d: 2, e: 1,
  f: 4, g: 2,  h: 4, i: 1, j: 8,
  k: 5, l: 1,  m: 3, n: 1, o: 1,
  p: 3, q: 10, r: 1, s: 1, t: 1,
  u: 1, v: 4,  w: 4, x: 8, y: 4,
  z: 10
};

ETL = function() {};

ETL.prototype.transform = function(oldFormatData) {
  var newFormatData = {};
  // 1,2,3, etc.
  for(var key in oldFormatData) {
    // A,B,C, etc.
    for(var i=0; i<oldFormatData[key].length; i++) {
      newFormatData[oldFormatData[key][i].toLowerCase()] = expected[oldFormatData[key][i].toLowerCase()];
    }
  }
  return newFormatData;
};

module.exports = ETL;
