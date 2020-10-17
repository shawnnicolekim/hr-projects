var Tree = function (value) {
  var newTree = {};
  newTree.value = value;
  newTree.children = [];

  return _.extend(newTree, treeMethods);
};

var treeMethods = {
  addChild: function (value) {
    this.children.push(Tree(value));
  },

  contains: function (target) {
    var hasTarget = 0;

    if (this.value === target) {
      hasTarget++;
    }

    for (var i = 0; i < this.children.length; i++) {
      hasTarget += this.children[i].contains(target);
    }

    return hasTarget > 0 ? true : false;
  },

  howMany: function (target) {
    var hasTarget = 0;

    if (this.value === target) {
      hasTarget++;
    }

    for (var i = 0; i < this.children.length; i++) {
      hasTarget += this.children[i].contains(target);
    }

    return hasTarget;
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
   // addChild: constant;
   // contains: linear;
   // Tree: constant;
 */
