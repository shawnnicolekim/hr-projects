/*jshint expr:true*/

/*
 * Bubble sort is the most basic sorting algorithm in all of Computer
 * Sciencedom. It works by starting at the first element of an array and
 * comparing it to the second element; if the first element is greater than the
 * second element, it swaps the two. It then compares the second to the third,
 * and the third to the fourth, and so on; in this way, the largest values
 * "bubble" to the end of the array. Once it gets to the end of the array, it
 * starts over and repeats the process until the array is sorted numerically.
 *
 * Implement a function that takes an array and sorts it using this technique.
 * Don't use JavaScript's built-in sorting function (Array.prototype.sort).
 *
 * QUERY: What's the time complexity of your algorithm? If you don't already
 * know, try to intuit this without consulting the Googles.
 *
 * Extra credit: Optimization time! During any given pass, if no elements are
 * swapped we can assume the list is sorted and can exit the function early.
 * After this optimization, what is the time complexity of your algorithm?
 *
 * Moar credits: Do you need to consider every element every time you iterate
 * through the array? Make it happen, boss. Again: Has the time complexity of
 * your algorithm changed?
*/

/*
 * Example usage:
 * bubbleSort([2, 1, 3]); // yields [1, 2, 3]
 *
*/

// trying to not consider every element every time I iterate
var bubbleSort = function(array) {
  var result = [];

  var minNum = Math.min.apply(null, array);

  var maxNum = Math.max.apply(null, array);

  var midpoint = Math.floor((minNum + maxNum) / 2);
  if (array.indexOf(midpoint) !== -1) {
    result.push(array.splice(array.indexOf(midpoint), 1)[0]);
  }


  var findSpot = function(array, min, max, mid) {
    if (array.length === 0) {
      return result;
    }
    if (array[0] > mid) {
      min = mid;
      mid = Math.floor((min + max) / 2);
      if (array[0] === mid) {
        result.push(array.splice(0, 1)[0]);
      }
    }
    if (array[0] < mid) {
      max = mid;
      mid = Math.floor((min + max) / 2);
      if (array[0] === mid) {
        result.unshift(array.splice(0, 1)[0]);
      }
    }
    findSpot(array, minNum, maxNum, midpoint)
  }

  findSpot(array, minNum, maxNum, midpoint);

  return result;
}



var bubbleSort = function(array) {
  // iterate over the given array
  // check if a > b, if so, switch them
  var first;
  var second;
  // using var min and var max for moar credits later


  //
  for (var i = 0; i < array.length; i++) {
    var previousArray = array.slice();
    array.forEach((element, index, array) => {
      // if first element is bigger than second element
      second = array[index + 1];
      if (element > second) {
        first = element;
        // switch the elements
        array.splice(index, 2, second, first);
      }
    })
    // if the previous order is the same as the current order after going through with forEach, break out of the loop
    if (JSON.stringify(previousArray) === JSON.stringify(array)) {
      break;
    }
  }

  return array;

};

// time complexity: Logarithmic
