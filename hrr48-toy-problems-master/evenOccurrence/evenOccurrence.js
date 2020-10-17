/*
 * Find the first item that occurs an even number of times in an array.
 * Remember to handle multiple even-occurrence items and return the first one.
 * Return null if there are no even-occurrence items.
*/

/*
 * example usage:
 * var onlyEven = evenOccurrence([1, 7, 2, 4, 5, 6, 8, 9, 6, 4]);
 * console.log(onlyEven); //  4
*/

// I: array
// O: the first item that occurs an even number of times or null for no even occurrences
// E: empty array? return null
  // must return first item in array that has even occurrences if there are multiple of them
var evenOccurrence = function(arr) {

  var result = {};
  var numOccurrences = [];

  if (arr.length === 0) {
    return null;
  }

  for (var i = 0; i < arr.length; i++) {
    var existsInResult = false;
    for (var key in result) {
      if (result[key][0] === arr[i]) {
        result[key][1]++;
        existsInResult = true;
        break;
      }
    }
    if (!existsInResult) {
      result[i] = [arr[i], 1];
    }
  }

  for (var index in result) {
    if (result[index][1] % 2 === 0) {
      return result[index][0];
    }
  }

  return null;
};
