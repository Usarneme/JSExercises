var Bob = function() {
};

Bob.prototype.hey = function(input) {
  switch ( input.slice(-1) ) {
    case '?':
      return 'Sure.';
      break;
    case '!':
      return 'Whoa, chill out!';
      break;
    case '':
    case ' ':
      return 'Fine. Be that way!';
      break;
    default:
      return 'Whatever.';
      break;
  }
};

module.exports = Bob;
