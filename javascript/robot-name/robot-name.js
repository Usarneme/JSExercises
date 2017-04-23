var usedNames = {};

Robot = function() {
  this.name = this.getNewName();
};

Robot.prototype.reset = function() {
  this.name = this.getNewName();
};

Robot.prototype.getNewName = function() {
  var letters = '',
      numbers = '';

      while(letters.length < 2) {
        var tmp = this.getTwoDigits();
        // Range of uppercase A - Z char codes
        if(tmp > 65 && tmp < 91) {
          letters += String.fromCharCode(tmp);
        }
      }

      numbers += this.getTwoDigits();
      numbers += this.getTwoDigits();
      numbers = numbers.substring(0,3);

  var returnValue = letters+numbers;

  if( usedNames[returnValue] ){
      return this.getNewName();
    } else {
      usedNames[returnValue] = true;
      return returnValue;
    }
};

Robot.prototype.getTwoDigits = function() {
  return "00".replace(/0/g,function() {
    return(0|Math.random()*10).toString()
  });
};

module.exports = Robot;
