var BinarySearchTree = function (value) {
  var newTree = Object.create(bstMethods);
  newTree.value = value;
  newTree.left = null; // lesser child
  newTree.right = null; // greater child
  return newTree;
};

var bstMethods = {};

bstMethods.insert = function (value) {
  if (value === this.value) {
    return 'This value is already in the tree';
  }

  if (value > this.value) {
    if (this.right === null) {
      this.right = BinarySearchTree(value);
    } else {
      if (value === this.right.value) {
        return 'This value is already in the tree';
      }
      this.right.insert(value);
    }
  }

  if (value < this.value) {
    if (this.left === null) {
      this.left = BinarySearchTree(value);
    } else {
      if (value === this.left.value) {
        return 'This value is already in the tree';
      }
      this.left.insert(value);
    }
  }
};

bstMethods.contains = function (value) {
  if (this.value === value) {
    return true;
  }

  if (value > this.value) {
    if (this.right === null) {
      return false;
    } else {
      return this.right.contains(value);
    }
  }
  if (value < this.value) {
    if (this.left === null) {
      return false;
    } else {
      return this.left.contains(value);
    }
  }
};

bstMethods.depthFirstLog = function (callback) {
  callback(this.value);

  if (this.left !== null) {
    this.left.depthFirstLog(callback);
  }
  if (this.right !== null) {
    this.right.depthFirstLog(callback);
  }

};

/*
 * Complexity: What is the time complexity of the above functions?
   BinarySearchTree: constant
   insert: logarithmic
   contains: logarithmic
   depthFirstLog: linear
 */

