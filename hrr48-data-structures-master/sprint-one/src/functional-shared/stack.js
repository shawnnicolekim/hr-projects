var Stack = function () {
  var obj = {};
  obj.storage = {};
  obj.counter = 0;

  return _.extend(obj, stackMethods);
};

var stackMethods = {
  push: function (value) {
    this.storage[this.counter] = value;
    this.counter++;
  },

  pop: function () {
    var removed = this.storage[this.counter - 1];
    delete this.storage[this.counter];
    if (this.counter > 0) {
      this.counter--;
    }
    return removed;
  },

  size: function () {
    return this.counter;
  }
};

