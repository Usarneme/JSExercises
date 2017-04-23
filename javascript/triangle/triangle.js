// Triangle with side length equal to a,b,c
Triangle = function(a,b,c) {
  this.a = a;
  this.b = b;
  this.c = c;
};

Triangle.prototype.kind = function() {
  try {
    if( (this.a === 0) || (this.b === 0) || (this.c === 0) ) {
      throw new Error('error condition. triangle length cannot be 0.');
    }
    if( (this.a < 0) || (this.b < 0) || (this.c < 0) ) {
      throw new Error('error condition. triangle length cannot be <0.');
    }
    // isosceles, equilateral, scalene, or illegal
    if( (this.a <= (this.b+this.c)) && (this.b <= (this.a+this.c)) && (this.c <= (this.a+this.b)) ) {
      if( (this.a === this.b) && (this.b === this.c) ) {
        return 'equilateral';
      }
      if( (this.a === this.b) || (this.a === this.c) || (this.b === this.c) ) {
        return 'isosceles';
      }
      if( (this.a != this.b) || (this.b != this.c) || (this.a != this.c) ) {
        return 'scalene';
      }
    } else {
        throw new Error('error condition. triangle inequality thereom failed.');
    }
  } catch(e) {
    throw new Error('Error caught: '+e.message);
  }
};

module.exports = Triangle;
