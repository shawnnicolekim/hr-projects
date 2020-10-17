/*
* Write a function that generates every sequence of throws a single
* player could throw over a three-round game of rock-paper-scissors.
*
* Your output should look something like:
*   ["RRR",
*    "RRP",
*    "RRS",
*    "RPR",
*    ...etc...
*   ]
*
* Extra credit:
*   - Make your function return answers for any number of rounds.
*
* Example:
* rockPaperScissors(5); // => ['RRRRR', 'RRRRP', 'RRRRS', etc...]
*
*/

// I: a number (first try is always going to be 3)
  // extra credit later: set possibleNumCombos, how many possible combos there can be
  // var possibleNumCombos = num ** 3;
// O: an array of every possible given number of combos with R, P, or S
// E for given num besides 3:
  // input num must be positive.
  // If input is 0, return empty array

var rockPaperScissors = function (n) {
  if (n === 0) {
    return [];
  }

  var num = n || 3;
  var result = [];
  var possibleLetters = ['R', 'S', 'P'];


  var getCombos = function(throws) {

    if (throws.length === num) {
      result.push(throws);
      return;
    }

    for (var i = 0; i < possibleLetters.length; i++) {
      getCombos(throws + possibleLetters[i]);
    }
  }

  getCombos('');

  return result;
};


console.log(rockPaperScissors());