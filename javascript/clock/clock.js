Clock = function(hours, minutes) {
  this.hours = hours;
  this.minutes = minutes;
};

Clock.at = function(hours, minutes) {
  hours = hours || 0;
  minutes = minutes || 0;

  while(minutes < 0) {
  hours--;
  minutes = minutes+60;
  }

  while(hours < 0) {
    hours = hours+24;
  }

//  console.log('\nminutes before: '+minutes);
  var minMod = minutes % 60;
  if(minutes === 60) {
    hours++;
    minutes = 0;
  }
  if(minutes > 60) {
    hours += Math.floor(minutes / 60);
    minutes = minMod;
  }
//  console.log('minutes after: '+minutes);

//  console.log('hours before: '+hours);
  var hourMod = hours % 24;
  if(hours === 24 || hourMod === 0) {
    hours = 0;
  } else if( hourMod > 0) {
    hours = hourMod;
  }
//  console.log('hours after: '+hours);

  if(hours >= 24 || minutes >= 60) {
    this.at(hours, minutes);
  } else {
//    console.log('at. new clock with: '+hours+':'+minutes);
    return new Clock(hours, minutes);
  }
};

Clock.prototype.toString = function() {
  var retString = '';
  if(this.hours < 10) {
    retString += '0'+this.hours+':';
  } else {
    retString += this.hours+':';
  }
  if(this.minutes < 10) {
    if(this.minutes === 0) {
      retString += '00';
    } else {
      retString += '0'+this.minutes;
    }
  } else {
    retString += this.minutes;
  }
//  console.log('Returning: '+retString+'\n');
  return retString;
};

Clock.prototype.plus = function(minutes) {
  return Clock.at(this.hours, (this.minutes + minutes));
};

Clock.prototype.minus = function(minutes) {
  return Clock.at(this.hours, (this.minutes - minutes));
};

module.exports = Clock;
