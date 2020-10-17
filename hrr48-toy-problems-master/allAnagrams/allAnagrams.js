/**
 * Given a single input string, write a function that produces all possible anagrams
 * of a string and outputs them as an array. At first, don't worry about
 * repeated strings.  What time complexity is your solution?
 *
 * Extra credit: Deduplicate your return array without using uniq().
 */

/**
  * example usage:
  * var anagrams = allAnagrams('abc');
  * console.log(anagrams); // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]
  */

var allAnagrams = function(string) {
  var result = [];

  if (!result.includes(string)) {
    result.push(string);
  }

  var recurse = function(str) {
    var pointer = str.length - 2;
    var arr = str.split('');

    while (pointer > -1) {
      var current = arr[pointer + 1];
      var temp = arr[pointer];
      arr[pointer] = current;
      arr[pointer + 1] = temp;
      var newString = arr.join('');

      if (!result.includes(newString)) {
        result.push(newString);
        recurse(newString);
      }

      arr = newString.split('');
      pointer--;
    }
  }

  recurse(string);

  return result;
};
