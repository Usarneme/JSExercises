
var monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", 'Thursday', "Friday", "Saturday"];

var meetupDay = function(year, month, weekday, description) {
  this.year = year;
  this.month = month;
  this.weekday = dayNames.indexOf(weekday);
  this.description = description;
  this.baseDate = new Date(year, month);

  this.weekDays = getAllWeekdays(year, month, this.weekday);

  switch(description) {
    case '1st':
      return this.weekDays[0];
    case '2nd':
      return this.weekDays[1];
    case '3rd':
      return this.weekDays[2];
    case '4th':
      return this.weekDays[3];
    case '5th':
      if(this.weekDays[4]) {
        return this.weekDays[4];
      } else {
        throw 'MeetupDayException';
      }
    case 'last':
      return this.weekDays[this.weekDays.length-1];
    case 'teenth':
      for(var i=0; i<this.weekDays.length; i++) {
        if(this.weekDays[i].getDate() > 9 && this.weekDays[i].getDate() < 20) {
          return this.weekDays[i]
        }
      } // end of for
  } // end of switch

};

function getAllWeekdays(year, month, weekday) {
  var d = new Date(year, month),
    dateArray = [];

  d.setDate(1);

  // Get the first weekday in the month
  while (d.getDay() !== weekday) {
    d.setDate(d.getDate() + 1);
  }

  // Get all the other weekdays in the month
  while (d.getMonth() === month) {
    dateArray.push(new Date(d.getTime()));
    d.setDate(d.getDate() + 7);
  }

  return dateArray;
};

module.exports = meetupDay;
