/*
 * Write Compose and Pipe functions.
 *
 * Step 1: Implement the function Compose:
 *
 * Compose should return a function that is the composition of a list of
 * functions of arbitrary length.
 *
 * Each function is called on the return value of the function that follows.
 *
 * You can view compose as moving right to left through its arguments.
 *
 * Compose Example:
 *   var greet = function(name){ return 'hi: ' + name;}
 *   var exclaim = function(statement) { return statement.toUpperCase() + '!';}
 *   var welcome = compose(greet, exclaim);
 *   welcome('phillip'); // 'hi: PHILLIP!'
 *
 * Step 2: Implement the function Pipe:
 *
 * Pipe composes a series of functions and returns the resulting function.
 *
 * Each function is called on the return value of the preceding function.
 *
 * You can view pipe as moving left to right through its arguments.
 *
 * Pipe Example:
 *  var add2 = function(number){ return number + 2; }
 *  var multiplyBy3 = function(number){ return number * 3; }
 *  pipe(add2, multiplyBy3)(5) // 21
 *  pipe(add2, multiplyBy3, multiplyBy3)(5) // 63
 */

'use strict';

// I: functions (arguments list will be of random length)
// O: a function
  // it goes from right to left, and each function is called on the return value of the function that follows
// E: what if one of the functions doesn't accept arguments? lets assume they at least use the arguments keyword within the func definition then.
// will the returned function have an identified parameter? or should I utilize the arguments keyword?

var compose = function() {
  var args = arguments;
  var index = args.length - 1;

  // return an anon function
  var composition = function(index, func) {
    if (index === -1) {
      return func;
    }

    var wrap;

    if (func === undefined) {
      wrap = function() {
      return args[index].apply(null, arguments);
      }
    } else {
      wrap = function() {
        return args[index].call(null, func);
      }
    }

    return composition(index - 1, wrap);
  }

  return composition(index);
};

var pipe = function() {
};
