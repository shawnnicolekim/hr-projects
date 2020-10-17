/**
 * Given an arbitrary input string, return the first nonrepeated character in
 * the string. For example:
 *
 *   firstNonRepeatedCharacter('ABA'); // => 'B'
 *   firstNonRepeatedCharacter('AACBDB'); // => 'C'
 */

 // I: string
 // O: string (letter)
 // check which one only repeats once, and which is the first one that only repeats once
 // E: no nonrepeated characters? return null.
var firstNonRepeatedCharacter = function(string) {
  var repeated = [];

  if (string.length === 1) {
    return string[0];
  }
  // iterate over the string
  for (var i = 1; i < string.length; i++) {
    // check if the index of the current element exists somewhere else in the string and it's not in the repeated array
    var newString = string.slice(0, i) + string.slice(i + 1);
    if (newString.indexOf(string[i]) === -1 && repeated.indexOf(string[i] === -1)) {
      // if it doesn't, return that letter
      return string[i]
    } else {
      repeated.push(string[i]);
    }
  }

  return null;
};
