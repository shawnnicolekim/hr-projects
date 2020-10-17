/*
 * function bind():
 *
 * example 1:
 *
 * var alice = {
 *   name: 'alice',
 *   shout: function(){
 *     alert(this.name);
 *   }
 * }
 * var boundShout = bind(alice.shout, alice);
 * boundShout(); // alerts 'alice'
 * boundShout = bind(alice.shout, {name: 'bob'});
 * boundShout(); // alerts 'bob'
 *
 * example 2:
 *
 * var func = function(a, b){ return a + b };
 * var boundFunc = bind(func, null, 'foo');
 * var result = boundFunc('bar');
 * result === 'foobar'; // true
 *
*/

// I: callback, object
// O: function with 'this' bound to given object
// E:
  // what if object is not provided? make object = null.

var bind = function(callback, object) {
  // get arguments after the first two, that will be the list of arguments to save
  var args = Array.prototype.slice.call(arguments, 2);

    // if ES6, I would use default params
  if (object === undefined) {
    object = null;
  }

  // create an anon function that binds 'this' to the given object
  // make the anon function have access to the rest of the arguments
  var resultFunc = function() {
    var newArgs = args;

    if (newArgs.length !== 0) {
      newArgs = args.concat(Array.prototype.slice.call(arguments));
    }

    return callback.apply(object, newArgs);
  }

  // return the function
  return resultFunc;
};

/*
 * Function.prototype.bind:
 *
 * example 1:
 *
 * var alice = {
 *   name: 'alice',
 *   shout: function(){
 *     alert(this.name);
 *   }
 * }
 * var boundShout = alice.shout.bind(alice);
 * boundShout(); // alerts 'alice'
 * boundShout = alice.shout.bind({name: 'bob'});
 * boundShout(); // alerts 'bob'
 *
 * example 2:
 *
 * var func = function(a, b){ return a + b };
 * var boundFunc = func.bind(null, 'foo');
 * var result = boundFunc('bar');
 * result === 'foobar'; // true
 *
*/

// I: object
// O: function with 'this' keyword bound to the given object
// E: what if no object? make object equal null.
Function.prototype.bind = function(object) {
  var callback = this;
  var args = Array.prototype.slice.call(arguments, 1);

  // if ES6, I would use default params
  if (object === undefined) {
    object = null;
  }

  var resultFunc = function() {
    var newArgs = args;

    if (newArgs.length !== 0) {
      newArgs = args.concat(Array.prototype.slice.call(arguments));
    }

    return callback.apply(object, newArgs);
  }

  // return the function
  return resultFunc;
};
