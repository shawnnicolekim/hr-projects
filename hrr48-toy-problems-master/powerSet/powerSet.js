/*
 * Return an array with the power set of a given string.
 * Definition of power set: The set of all possible subsets including the empty set.
 *
 * Example:
 *
 * powerSet("abc")
 * -> [ '' , 'a', 'b', 'c', 'ab', 'ac', 'bc', 'abc' ]
 *
 * Note:
 *  1. All characters in a subset should be sorted.
 *  2. Sets of the same characters are considered duplicates regardless of order and count only once, e.g. 'ab' and 'ba' are the same.
 *
 * Example 2 :
 *
 * powerSet("jump")
 * -> ["", "j", "ju", "jm", "jp", "jmu", "jmp", "jpu", "jmpu", "u", "m", "p", "mu", "mp", "pu", "mpu"]
 *
 * ['', j, ju, jm, jp,] * x
 * [jmu, jmp] *
 * [jpu] x
 * [jmpu] *
 * [u]
 * [m] *
 * [p] x
 * [mu, mp] *
 * [pu] x
 * [mpu] *
 */

var powerSet = function(str) {
  var results = [''];

  // iterate over the given string
  for (var i = 0; i < str.length; i++) {
    getSets(str[i], );
  }

  var getSets = function(string) {
    if (results.indexOf(string) === -1) {
      results.push(string);
    }


  }
};
