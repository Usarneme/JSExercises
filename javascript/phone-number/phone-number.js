var PhoneNumber = function(inputNumber) {
  this.phoneNumber = inputNumber;
};

PhoneNumber.prototype.areaCode = function() {
  return this.phoneNumber.substring(0,3);
};

PhoneNumber.prototype.toString = function() {
  return '('+this.phoneNumber.substring(0,3)+') '+this.phoneNumber.substring(3,6)+'-'+this.phoneNumber.substring(6,this.phoneNumber.length);
};

PhoneNumber.prototype.number = function() {
  // remove all formatting, everything that isn't a number
  var workingNumber = this.phoneNumber.replace(/[^0-9]/g, '');
  // if 10 digits exactly, it's a good number
  if(workingNumber.length === 10) {
    this.phoneNumber = workingNumber;
    return workingNumber;
  } else {
    if(workingNumber.length === 11) {
      // if 11 digits and starts with 1, it's a good number
      if(workingNumber.substring(0,1) == 1) {
        workingNumber = workingNumber.substring(1,(workingNumber.length));
        this.phoneNumber = workingNumber;
        return workingNumber;
      } else {
        // it's 11 digits but does NOT start with 1
        this.phoneNumber = 0000000000;
        return '0000000000';
      }
    } else {
      // it's not 10 or 11 digits, so invalid
      this.phoneNumber = 0000000000;
      return '0000000000';
    }
  }
};

module.exports = PhoneNumber;
