/*
 * Given a sorted array, find the index of an element
 * using a binary search algorithm.
 *
 * Example usage:
 *
 * var index = binarySearch([1, 2, 3, 4, 5], 4);
 * console.log(index); // 3
 * var index = binarySearch([1, 2, 3, 4, 5], 8);
 * console.log(index); // null
 */

var binarySearch = function (array, target) {
  // min and max indexes
  var minInd = 0;
  var maxInd = array.length - 1;

  var findIndex = function(arr, targ, start, end) {
    var midInd = Math.floor((end - start) / 2) + start;
    var midpoint = array[midInd];

    if (target === midpoint) {
      return midInd;
    }

    if (start === end) {
      return null;
    }

    if (target < midpoint) {
      return findIndex(arr, targ, start, midInd);
    }

    if (target > midpoint) {
      return findIndex(arr, targ, midInd + 1, end)
    }
  }

  return findIndex(array, target, minInd, maxInd);
};

