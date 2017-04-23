// Score a standard game of bowling
// Takes an array of rolls/scores as input
Bowling = function(rolls) {
//  console.log('\nNew bowling with rolls: '+rolls+' with length: '+rolls.length);

  // this.score function returns the total score value for the Bowling game
  // various errors if the numbers are out of range or the game has not yet finished, etc.
  this.score = function() {
    var score = 0,
        frame = 1;

    if( rolls.length < 10 ) {
      throw new Error('Score cannot be taken until the end of the game');
    }

    for(var i=0; i<rolls.length; i++) {
//      console.log(frame+'th frame. rolls['+i+']: '+rolls[i]+' and rolls[i+1]: '+rolls[i+1]);

      if( frame === 10 && rolls[i] + rolls[i+2] === 0 ) {
        throw new Error('Should not be able to roll after game is over');
      }

      if( frame === 10 && rolls[i] === 10 && rolls[i+1] === undefined ) {
        throw new Error('Score cannot be taken until the end of the game');
      }

      if( frame === 10 && rolls[i] + rolls[i+1] === 10 && rolls[i+2] === undefined ) {
        throw new Error('Score cannot be taken until the end of the game');
      }

      if( frame === 10 && rolls[i+1] === 10 && rolls[i+2] === undefined ) {
        throw new Error('Score cannot be taken until the end of the game');
      }

      // error if less than 0 or greater than 10 for any individual score
      if( rolls[i] < 0 || rolls[i] > 10) {
        throw new Error('Pins must have a value from 0 to 10');
      }

      if( rolls[i] === 10 ) {
      // if a strike, count the 10 plus the next 2 bowled frames
        if( frame <= 10 ) {
          score += 10;
          score += rolls[i+1];
          score += rolls[i+2];
//          console.log('Strike. Score: '+score);
          frame++;
        }
      } else if( rolls[i] > 10 || rolls[i] + rolls[i+1] > 10 ) {
        // error if two rolls in a frame add up to more than 10
          throw new Error('Pin count exceeds pins on the lane');
      } else if( rolls[i] + rolls[i+1] === 10 ) {
        // if a spare, count the 10 plus the next bowled frame
        if( frame <= 10 ) {
          score += 10;
          score += rolls[i+2];
//          console.log('Spare. Score: '+score);
          frame++;
          // increment by two rolls for a spare (2 rolls = 1 frame)
          i++;
        }
      } else if( rolls[i] + rolls[i+1] < 10 ) {
        // if the two rolls in a frame add up to less than 10...
        // add that score to the tally
        if( frame <= 10 ) {
          score += rolls[i] + rolls[i+1];
//          console.log('Open. Score: '+score);
          frame++;
          // increment by two rolls for a <10 frame (2 rolls = 1 frame)
          i++;
        }
      }

    } // end of for
//  console.log('Returning score: '+score);
  return score;
  } // end of this.score()
}; // end of Bowling()

module.exports = Bowling;
