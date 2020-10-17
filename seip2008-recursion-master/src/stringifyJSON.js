// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

// boolean, number, and string objects are converted to the corresponding primitive values
// undefined, Functions, and Symbols are not valid JSON values so they are ommitted (when found in object) or changed to null (when found in an array).
// when passing pure values like JSON.stringify(function(){}) or JSON.stringify(undefined), it will return undefined.
// Infinity, Nan and null are considered null

var stringifyJSON = function(obj) {
  var result = '';

  // Checks if input is string, boolean, or number
  var strBoolNum = (typeof obj === 'string' || typeof obj === 'boolean') || typeof obj === 'number';

  if (obj === null) {
    return 'null';
  }

  if (typeof obj === 'string') {
    return result += '"' + obj + '"';
  }

  if (typeof obj === 'boolean') {
    return obj.toString();
  }

  if (typeof obj === 'number') {
    return obj.toString();
  }

  if (Array.isArray(obj)) {

    for (var i = 0; i < obj.length; i++) {
      if (i === obj.length - 1) {
        result += stringifyJSON(obj[i]);
        continue;
      }
      result += stringifyJSON(obj[i]) + ',';
    }
    return '[' + result + ']';
  }

  if (typeof obj === 'object') {
    var objKeys = Object.keys(obj);

    for (var key in obj) {
      if (typeof obj[key] === 'function' || obj[key] === undefined) {
        continue;
      }
      if (key === objKeys[objKeys.length - 1]) {
        result += '"' + key + '":' + stringifyJSON(obj[key]);
        continue;
      }
      result += '"' + key + '":' + stringifyJSON(obj[key]) + ',';
    }

    return '{' + result + '}';
  }

};