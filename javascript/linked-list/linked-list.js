var LinkedList = function() {
  this.arr = [];
};

LinkedList.prototype.push = function(value) {
  this.arr.push(value);
};

LinkedList.prototype.pop = function(value) {
  return this.arr.pop(value);
};

LinkedList.prototype.shift = function() {
  return this.arr.shift();
};

LinkedList.prototype.unshift = function(value) {
  this.arr.unshift(value);
};

LinkedList.prototype.count = function() {
  return this.arr.length;
};

LinkedList.prototype.delete = function(value) {
  this.arr.splice(this.arr.indexOf(value), 1);
};

module.exports = LinkedList;
