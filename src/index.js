
exports.min = function min (array) {
  if (!array || !array.length) return 0;
  let result = Math.min(...array);
  return result;
}

exports.max = function max (array) {
  if (!array || !array.length) return 0;
  let result = Math.max(...array);
  return result;
}

exports.avg = function avg (array) {
  if (!array || !array.length) return 0;
  let result = array.reduce((acc, it) => acc + it) / array.length;
  return result;
}
