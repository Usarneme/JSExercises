
const directionsClockwise = [ 'north', 'east', 'south', 'west' ],
      directionsCounter = [ 'north', 'west', 'south', 'east' ];

// Robot exists on a cartesian plane with coordinates x,y
// and bearing (facing direction) of one cardinal direction n,e,s,w
var Robot = function() {
  this.bearing = '';
  this.coordinates = [];
};

// Orients the robot by setting this.bearing (if valid)
Robot.prototype.orient = function(direction) {
  // If the provided direction is an allowable direction...
  if( directionsClockwise.join().match(direction) ) {
    // Set the bearing to that direction
    this.bearing = direction;
  } else {
    throw new Error('Invalid Robot Bearing');
  }
};

// Turns the robot's bearing clockwise one cardinal direction
Robot.prototype.turnRight = function() {
  this.bearing = directionsClockwise[ (directionsClockwise.indexOf(this.bearing)+1)%4 ];
};

// Turns the robot's bearing counter clockwise one cardinal direction
Robot.prototype.turnLeft = function() {
  this.bearing = directionsCounter[ (directionsCounter.indexOf(this.bearing)+1)%4 ];
};

// Sets the robot's coordinates/location on the plane
Robot.prototype.at = function(x, y) {
  this.coordinates = [x, y];
};

// Moves the robot forward (bearing direction) by one whole number
Robot.prototype.advance = function() {
  switch(this.bearing) {
    case('north'):
    this.coordinates[1]++;
    break;
    case('east'):
    this.coordinates[0]++;
    break;
    case('south'):
    this.coordinates[1]--;
    break;
    case('west'):
    this.coordinates[0]--;
    break;
  }
};

// Parses an abbreviated instructions string
// returns an array of verbose instructions from the instructionSet list
Robot.prototype.instructions = function(abbrevInstructions) {
  const instructionSet = {
    'L': 'turnLeft',
    'R': 'turnRight',
    'A': 'advance'
  };
  var instructionsArray = abbrevInstructions.split(''),
      formattedInstructionsArray = [];
  if(instructionsArray.length === 1) {
    return [instructionSet[abbrevInstructions]];
  } else {
    for(var i=0; i<instructionsArray.length; i++) {
      formattedInstructionsArray.push( instructionSet[ instructionsArray[i] ] );
    }
  }
  return formattedInstructionsArray;
};

// Places the robot with both x,y coordinates and a bearing
Robot.prototype.place = function(position) {
  this.coordinates[0] = position['x'];
  this.coordinates[1] = position['y'];
  this.bearing = position['direction'];
};

// Evaluates a provided set of abbreviated instructions by making the robot do each of them in series
Robot.prototype.evaluate = function(abbrevInstructions) {
  var verbose = this.instructions(abbrevInstructions);
  for(var i=0; i<verbose.length; i++) {
    this[verbose[i]]();
  }
};

module.exports = Robot;
