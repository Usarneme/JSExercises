
var CustomSet = function(arr) {
  this.set = Array.from(new Set(arr)) || [];
};

// returns true if the set is empty
CustomSet.prototype.empty = function() {
  if(this.set[0] == undefined ) {
    return true;
  }
  return false;
};

CustomSet.prototype.contains = function(val) {
  if(this.set === undefined) {
    return false;
  }

  if(this.set.includes(val)) {
    return true;
  } else {
    return false;
  }
};

CustomSet.prototype.subset = function(otherSet) {
  var set1 = this.set,
      set2 = otherSet.set;

  if(set1 === undefined && set2 === undefined) { return true; }
  if(set1 && set2 === undefined) { return true; }
  if(set1 === undefined && set2 || set2.length > set1.length ) { return false; }

  set1 = set1.sort();
  set2 = set2.sort();

  if(set1.equals(set2)) { return true; }

  var i, j;
  for (i=0,j=0; i<set1.length && j<set2.length;) {
    if (set1[i] < set2[j]) {
      ++i;
    } else if (set1[i] == set2[j]) {
      ++i; ++j;
    } else {
      return false;
    }
  }
  return j == set2.length;
};

CustomSet.prototype.disjoint = function(otherSet) {
  var set1 = this.set,
      set2 = otherSet.set;

  if(set1 === undefined || set2 === undefined) { return true; }

  for(var i=0; i<set1.length; i++) {
    if(set2.includes(set1[i])) {
      return false;
    }
  }
  return true;
};

CustomSet.prototype.eql = function(otherSet) {
  var set1 = this.set,
      set2 = otherSet.set;

  if(set1 === undefined && set2 === undefined) { return true; }
  if(set1 === undefined || set2 === undefined) { return false; }

  set1 = set1.sort();
  set2 = set2.sort();

  if(set1.equals(set2, 0)) { return true; }
  return false;
};

CustomSet.prototype.add = function(val) {
  var set1 = this.set;
  if(set1.indexOf(val) === -1) {
    set1.push(val);
  }
  return new CustomSet(set1);
};

CustomSet.prototype.intersection = function(otherSet) {
  var matchedElements = [],
      set1 = this.set,
      set2 = otherSet.set,
      combined = Array.from(new Set([...set1, ...set2]));

  if(set1[0] === undefined || set2[0] === undefined) { return new CustomSet() };

  for(value in combined) {
    if(set1.indexOf(set1[value]) !== -1 && set2.indexOf(set1[value]) !== -1) {
      matchedElements.push(set1[value]);
    }
  }
  return new CustomSet(matchedElements);
};

CustomSet.prototype.difference = function(otherSet) {
  var set1 = this.set,
      set2 = otherSet.set,
      set3 = [],
      combined = Array.from(new Set([...set1, ...set2]));

  if(set1[0] === undefined) {
    return new CustomSet();
  } else {
    combined.forEach(function(i) {
      if(set1.indexOf(i) >= 0 && set2.indexOf(i) === -1) {
        set3.push(i);
      }
    }); //end of forEach
  }
  return new CustomSet(set3);
};

CustomSet.prototype.union = function(otherSet) {
  var set1 = this.set,
      set2 = otherSet.set,
      set3 = [],
      combined = Array.from(new Set([...set1, ...set2]));

  if(set1[0] === undefined && set2[0] === undefined ) { return new CustomSet(); }
  if(set1[0] !== undefined && set2[0] === undefined ) { return new CustomSet(set1); }
  if(set1[0] === undefined && set2[0] !== undefined ) { return new CustomSet(set2); }

  combined.forEach(function(i) {
    if(set1.indexOf(i) !== -1 && set2.indexOf(i) !== -1) {
      set3.push(i);
    }
  }); //end of forEach
  return new CustomSet(combined);
};

CustomSet.prototype.clear = function() {
  return new CustomSet();
};

CustomSet.prototype.size = function() {
  return this.set.length;
};

CustomSet.prototype.toList = function() {
  return this.set.sort() || [];
};

// https://tc39.github.io/ecma262/#sec-array.prototype.includes
if (!Array.prototype.includes) {
  Object.defineProperty(Array.prototype, 'includes', {
    value: function(searchElement, fromIndex) {

      // 1. Let O be ? ToObject(this value).
      if (this == null) {
        throw new TypeError('"this" is null or not defined');
      }

      var o = Object(this);

      // 2. Let len be ? ToLength(? Get(O, "length")).
      var len = o.length >>> 0;

      // 3. If len is 0, return false.
      if (len === 0) {
        return false;
      }

      // 4. Let n be ? ToInteger(fromIndex).
      //    (If fromIndex is undefined, this step produces the value 0.)
      var n = fromIndex | 0;

      // 5. If n ≥ 0, then
      //  a. Let k be n.
      // 6. Else n < 0,
      //  a. Let k be len + n.
      //  b. If k < 0, let k be 0.
      var k = Math.max(n >= 0 ? n : len - Math.abs(n), 0);

      // 7. Repeat, while k < len
      while (k < len) {
        // a. Let elementK be the result of ? Get(O, ! ToString(k)).
        // b. If SameValueZero(searchElement, elementK) is true, return true.
        // c. Increase k by 1.
        // NOTE: === provides the correct "SameValueZero" comparison needed here.
        if (o[k] === searchElement) {
          return true;
        }
        k++;
      }

      // 8. Return false
      return false;
    }
  });
};

// Warn if overriding existing method
if(Array.prototype.equals)
    console.warn("Overriding existing Array.prototype.equals. Possible causes: New API defines the method, there's a framework conflict or you've got double inclusions in your code.");
// attach the .equals method to Array's prototype to call it on any array
Array.prototype.equals = function (array) {
    // if the other array is a falsy value, return
    if (!array)
        return false;

    // compare lengths - can save a lot of time
    if (this.length != array.length)
        return false;

    for (var i = 0, l=this.length; i < l; i++) {
        // Check if we have nested arrays
        if (this[i] instanceof Array && array[i] instanceof Array) {
            // recurse into the nested arrays
            if (!this[i].equals(array[i]))
                return false;
        }
        else if (this[i] != array[i]) {
            // Warning - two different object instances will never be equal: {x:20} != {x:20}
            return false;
        }
    }
    return true;
};
// Hide method from for-in loops
Object.defineProperty(Array.prototype, "equals", {enumerable: false});

module.exports = CustomSet;
