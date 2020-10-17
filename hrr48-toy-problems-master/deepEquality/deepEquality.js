/**
  * Write a function that, given two objects, returns whether or not the two
  * are deeply equivalent--meaning the structure of the two objects is the
  * same, and so is the structure of each of their corresponding descendants.
  *
  * Examples:
  *
  * deepEquals({a:1, b: {c:3}},{a:1, b: {c:3}}); // true
  * deepEquals({a:1, b: {c:5}},{a:1, b: {c:6}}); // false
  * don't worry about handling cyclical object structures.
  *
  */

// I: 2 objects
// O: boolean (whether or not they are deeply equivalent)
// E:
  // no cyclical
  // values can be arrays as well

var deepEquals = function(apple, orange) {
  var result = true;

  var findMatch = function(first, second) {
    if (Object.keys(first).length !== Object.keys(second).length) {
      result = false;
      return;
    }
    for (var key in first) {
      if (typeof first[key] === 'object' && typeof second[key] === 'object') {
        findMatch(first[key], second[key]);
      } else if (first[key] !== second[key]) {
        result = false;
        return;
      }
    }
  }

  findMatch(apple, orange);

  return result;
};
