// a student database object
School = function() {
  this.studentDB = {};
  // initialize studentDB object with 12 properties for grades 1-12
  for(var i=1;i<13;i++) {
    this.studentDB[i] = [];
  }
};

// returns a list of all students arranged by grade year from youngest to oldest
School.prototype.roster = function() {
  var retVal = {};
  for(var i=1;i<13; i++) {
    // if the current grade has no entries (i.e.: it is an empty array)
    if (this.studentDB[i][0] !== undefined) {
      // there is a student in that grade number, get all students in that grade
      retVal[i] = this.grade(i);
    } else {
      // no one listed in that grade, return nothing
    }
  }
//  console.log('Roster function. \nReturning retVal: '+retVal);
  return retVal;
};

// add a student with @param name to the class year @param grade
School.prototype.add = function(name, grade) {
  // console.log('\nAdd Function. name: '+name+', grade: '+grade);
  // console.log('\nthis.studentDB.grade: '+this.studentDB[grade]);
  this.studentDB[grade].push(name);
};

// returns an alphabetical list of all students in the provided @param grade
School.prototype.grade = function(grade) {
//  console.log('\nGrade Function. Returning this.studentDB[grade]: '+this.studentDB[grade]);
  return this.studentDB[grade].sort();
};

module.exports = School;
