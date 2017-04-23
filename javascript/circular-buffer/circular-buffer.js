// Works in my repl duplicating all tests manually. Doesn't work in exercism's pre-made Jasmine test suite...
// I don't know why. Any help you all can contribute is appreciated.

circularBuffer = function(size) {
  this.buffer = Array(size);
  console.log('CircularBuffer: '+this.buffer+' with size: '+this.buffer.length);
};

circularBuffer.prototype.read = function() {
  console.log('Read function. This buffer: '+this.buffer+' with length: '+this.buffer.length);
  var count = 0;
  for(var i=0; i<this.buffer.length; i++) {
    if(this.buffer[i] === undefined) {
      console.log('Empty error++');
      count++;
    } else {
    console.log('Non-empty element #'+i+': '+this.buffer[i]);
    }
  }
  if(count === this.buffer.length) {
    console.log('Empty buffer.');
    throw bufferEmptyException();
  } else {
    return this.buffer;
  }
};

circularBuffer.prototype.write = function(word) {
  var count = 0;
  for(var i=0; i<this.buffer.length; i++) {
    if(this.buffer[i] !== undefined) {
      console.log('Non-empty element #'+i+': '+this.buffer[i]);
      count++;
    } else {
      console.log('Empty element exists.');
    }
  }
  if(count === this.buffer.length) {
    console.log('Full buffer.');
    throw bufferFullException();
  } else {
    // remove first element
    this.buffer.splice(0,1);
    // add last element
    this.buffer.push(word);
    console.log('New buffer after write: '+this.buffer);
  }
};

circularBuffer.prototype.forceWrite = function(word) {
  this.buffer.splice(0,1);
  this.buffer.push(word);
  console.log('New buffer after force write: '+this.buffer);
};

circularBuffer.prototype.clear = function() {
  this.buffer.length = 0;
  console.log('Buffer cleared to: '+this.buffer);
}

bufferEmptyException = function() {
  return new Error('Empty');
};

bufferFullException = function() {
  return new Error('Full');
};

module.exports = {
  circularBuffer: new circularBuffer,
  bufferEmptyException,
  bufferFullException
};
