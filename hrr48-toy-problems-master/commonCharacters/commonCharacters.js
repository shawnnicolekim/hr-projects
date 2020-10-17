/**
 * Write a function `f(a, b)` which takes two strings as arguments and returns a
 * string containing the characters found in both strings (without duplication), in the
 * order that they appeared in `a`. Remember to skip spaces and characters you
 * have already encountered!
 *
 * Example: commonCharacters('acexivou', 'aegihobu')
 * Returns: 'aeiou'
 *
 * Extra credit: Extend your function to handle more than two input strings.
 */

// I: 2 strings (or more)
// O: a string
  // should contain common characters, no duplicates
  // keep order and skip spaces

var commonCharacters = function(string1, string2) {
  var args = Array.prototype.slice.call(arguments)
  var commonChars = [];
  var filtered;

  for (var i = 0; i < args.length - 1; i++) {
    filtered = args[i].split('').filter(element => {
      return args[i + 1].includes(element);
    });
    commonChars = commonChars.concat(filtered);
  }
  return [... new Set (commonChars)].join('');
};
