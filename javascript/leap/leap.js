var Leap = function(year) {
  this.year = year;
};

Leap.prototype.isLeap = function() {

  // Third and final attempt, utilizing existing js functionality
  return (new Date(this.year, 1, 29).getMonth() == 1)

  // Second attempt, stringing together if statements
  //  return ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);

  // First attempt, the long way
  // var mod4 = (input % 4);
  // var mod100 = (input % 100);
  // var mod400 = (input % 400);
  //
  // if( mod4 == 0 ) {
  // // year is divisible by 4
  //   if ( mod100 == 0 ) {
  //   // year is divisible by 4 and 100
  //      if ( (input % 400) == 0 ) {
  //        // year is divisible by 4, 100, AND 400
  //        return true;
  //      } else {
  //        // year is divisible by 4, 100, but not 400
  //        return false;
  //      }
  //   } else { // year is divisible by 4 but not 100
  //     return false;
  //   }
  // } // year is not divisible by 4
  // return false;
};

// Leap year occurs:
//  on every year that is evenly divisible by 4
//    except every year that is evenly divisible by 100
//      unless the year is also evenly divisible by 400


module.exports = Leap;
