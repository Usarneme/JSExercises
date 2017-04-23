
var Triplet = function() {
  // set up an array with the provided numbers
  this.mSet = [...arguments];
  // console.log('\nmSet: '+this.mSet);
};

Triplet.prototype.sum = function() {
  var sum = 0;
  this.mSet.forEach(function(i) {
    sum += parseInt(i);
  });
  return sum;
};

Triplet.prototype.product = function() {
  var product = 1;
  this.mSet.forEach(function(i) {
    product *= i;
  });
  return product;
};

Triplet.prototype.isPythagorean = function() {
  var a = Math.pow(this.mSet[0],2),
      b = Math.pow(this.mSet[1],2),
      c = Math.pow(this.mSet[2],2);
  if( a+b === c ) {
    return true;
  } else {
    return false;
  }
};

/* Finds triplets with between given min and max, with sum where applicable */
Triplet.where = function(params) {
  var triplets = [],
      max=params.maxFactor,
      min=params.minFactor || 2,
      sum=params.sum || 0;
  for (var i=min;i<=max;i++){
    for (var j=i+1;j<=max;j++){
      for(var k=j+1;k<=max;k++){
        var t = new Triplet(i,j,k)
        if (sum != 0 && (t.sum() == sum)) {
          t.isPythagorean() ? triplets.push(t) : {};
        } else if (sum == 0) {
          t.isPythagorean() ? triplets.push(t) : {};
        }
      }
    }
  }
  return triplets
};

module.exports = Triplet;
