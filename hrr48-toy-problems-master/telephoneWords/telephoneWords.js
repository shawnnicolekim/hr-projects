/*
  * Each number key on a standard phone keypad has a set of Latin letters written on
  * it as well: http://en.wikipedia.org/wiki/File:Telephone-keypad2.svg
  *
  * Businesses often try to come up with clever ways to spell out their phone number
  * in advertisements to make it more memorable. But there are a lot of combinations!
  *
  * Write a function that takes up to four digits of a phone number, and
  * returns a list of all of the words that can be written on the phone with
  * that number. (You should return all permutations, not only English words.)
  *
  * Example:
  *   telephoneWords('2745');
  *   => ['APGJ',
  *        'APGK',
  *        'APGL', APHJ, APHK, APHL, APIJ, APIK, APIL
  *        ..., // many many more of these
  *        'CSIL']
  *
  * Tips:
  *   - Phone numbers are strings! (A phone number can start with a zero.)
  *   - The digits 0 and 1 do not have letters associated with them, so they should be left as numbers.
  *   - Don't return every combination of those digits in any order, just the order given.
  *
  *  Extra credit: There's a list of English dictionary words at /usr/share/dict/words .
  *  Why not filter your results to only return words contained in that file?
  *
  */

var phoneDigitsToLetters = {
  0: '0',
  1: '1',
  2: 'ABC',
  3: 'DEF',
  4: 'GHI',
  5: 'JKL',
  6: 'MNO',
  7: 'PQRS',
  8: 'TUV',
  9: 'WXYZ'
};

// I: a string of 4 digits
// O: an array of strings
// TODO: return every combination that can be spelled on a phone with these digits
// E: 0 or 1? Keep as number
var telephoneWords = function(digitString) {
  // create result array
  var result = [];

  var baseCombo = '';

  // create foundation combo
  for (var m = 0; m < digitString.length; m++) {
    baseCombo += digitString[m][0];
  }

  var getCombos = function(combo, index) {
    if (combo.length === 0) {
      return '';
    }

    for (var i = 1; i <= phoneDigitsToLetters[combo[index]].length; i++) {
      result.push(combo.substr(0, 3) + getCombos(combo.substring(-i), index + 1));
    }

  }

  getCombos(baseCombo, 0);

  return result;

// gameplan
  // create foundation combo
  // go over every letter possible starting from the last index
};