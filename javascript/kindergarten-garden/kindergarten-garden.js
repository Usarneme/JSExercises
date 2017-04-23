var Garden = function() {
  var plantInitials = arguments[0].split('\n'),
      studentList = [],
      plantNames = { 'G':'grass', 'C':'clover', 'R':'radishes', 'V':'violets'};

  // Set up the property names to either those provided by the test or the defaul set of names A-L
  // If no list of students was provided...
  if(!arguments[1]) {
    studentList = [...['alice', 'bob', 'charlie', 'david', 'eve', 'fred', 'ginny', 'harriet', 'ileana', 'joseph', 'kincaid', 'larry']];
    console.log('\nUsing default name list.');
    // Use the default list of Alice, Bob, etc.
    studentList.forEach(function(name) {
      Object.defineProperty(this, name, {
        writable: true,
        enumerable: true,
        configurable: true,
        value: []
      }); // end of defineProp
    }); // end of forEach
  // Otherwise...
  } else {
    // Use the provided list of student names, alphabetized
    studentList = [...arguments[1].sort()];
    // Remove the capital letter
    studentList.forEach(function(capital) {
      studentList[studentList.indexOf(capital)] = capital.toLowerCase();
    });
    console.log('\nUsing provided name list.');
    studentList.forEach(function(name) {
      Object.defineProperty(this, name, {
        writable: true,
        enumerable: true,
        configurable: true,
        value: []
      }); // end of defineProp
    }); // end of forEach
  }

  // console.log('Props: '+Object.getOwnPropertyNames(this) );
  // console.log( 'Plant initials set to: '+plantInitials );

  // For each row up to a maximum of two rows...
  for(var i=0; i<2; i++) {
    // For each pair of plants in the row...
    for(var j=0; j<plantInitials[i].length-1; j++) {
//      console.log('Plant Initials on row '+i+': '+plantInitials[i]+'. Current position '+j+': '+plantInitials[i].substring(j*2,j*2+2));
      // Set the property value to the plant which corresponds to the initials
      // If not already initialized...
      if(!this[studentList[j]]) {
        this[studentList[j]] = [];
      }
      this[studentList[j]].push( plantNames[ plantInitials[i].substring(j*2,j*2+1) ] );
      this[studentList[j]].push( plantNames[ plantInitials[i].substring(j*2+1,j*2+2) ] );
//      console.log('Name: '+studentList[j]+' and value: '+this[studentList[j]] );
    } //end of j loop
  } //end of i loop
//  console.log('Final prop list: '+Object.getOwnPropertyNames(this));
};

module.exports = Garden;
