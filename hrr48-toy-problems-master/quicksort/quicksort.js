/**
 * Quicksort is a sorting algorithm that uses a divide and conquer strategy;
 *
 * It:
 *    Takes in an array.
 *    Picks a value in the array as a pivot.
 *    Partitions all the elements of the array into two arrays, based on
 *      if they are larger or smaller than the pivot.
 *    Recursively sorts the two halves.
 *    Combines the two arrays and the pivot into a sorted array.
 */


var quicksort = function(array, left, right) {
  // base case: if left is greater than or equal to right, return nothing
  if (left >= right) {
    return;
  }

  // create 2 pointers for indexes: left and right
  var left = left || 0;
  var right = right || array.length - 1;

  // find pivot
  var pivot = array[Math.floor((left + right) / 2)];
  // keep reference for recursion
  var point = swap(array, left, right, pivot);

  // recurse on left side
  quicksort(array, left, point - 1);
  // recurse on right side
  quicksort(array, point + 1, right);

  // should modify in place
  return array;
}

var swap = function(array, left, right, pivot) {
  while (left <= right) {
    while (array[left] < pivot) {
      left++;
    }
    while (array[right] > pivot) {
      right--;
    }
    if (left <= right) {
      var tempLeft = array[left];
      array[left] = array[right];
      array[right] = tempLeft;
      left++;
      right--;
    }
  }
  return left;
}

  // if array is less than 2 elements (1 or 0)

    // return array

  // choose index 0 as pivot
  // have a container for smaller elements
  // have a container for bigger elements

  // iterate over the given array starting at index 1
    // if the current element is smaller than the pivot
      // insert it into the smallContainer
    // if the current element is bigger than the pivot
      // insert it into the bigContainer

  // return the combination of calling quicksort on the smallContainer and bigContainer, make sure to add pivot in the middle