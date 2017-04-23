// Returns a new array containing the results of the
// @param func function on each element in the
// @param arr array
module.exports = (arr, func) => {
  var retArr = [];
  arr.forEach(i => retArr.push( func(i) ));
  return retArr;
}
