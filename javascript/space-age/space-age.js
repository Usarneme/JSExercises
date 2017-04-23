// - Earth: orbital period 365.25 Earth days, or 31557600 seconds
SpaceAge = function(seconds) {
  this.seconds = seconds;
};

SpaceAge.prototype.onEarth = function() {
  return parseFloat((this.seconds/31557600).toFixed(2));
};

SpaceAge.prototype.onMercury = function() {
  return parseFloat((this.seconds/0.2408467/31557600).toFixed(2));
};

SpaceAge.prototype.onVenus = function() {
  return parseFloat((this.seconds/0.61519726/31557600).toFixed(2));
};

SpaceAge.prototype.onMars = function() {
  return parseFloat((this.seconds/1.8808158/31557600).toFixed(2));
};

SpaceAge.prototype.onJupiter = function() {
  return parseFloat((this.seconds/11.862615/31557600).toFixed(2));
};

SpaceAge.prototype.onSaturn = function() {
  return parseFloat((this.seconds/29.447498/31557600).toFixed(2));
};

SpaceAge.prototype.onUranus = function() {
  return parseFloat((this.seconds/84.016846/31557600).toFixed(2));
};

SpaceAge.prototype.onNeptune = function() {
  return parseFloat((this.seconds/164.79132/31557600).toFixed(2));
};

module.exports = SpaceAge;
