var Queue = function () {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = {};
  obj.storage = {};
  obj.front = 0;
  obj.rear = 0;

  return _.extend(obj, queueMethods);
};

var queueMethods = {
  enqueue: function (value) {
    this.storage[this.rear] = value;
    this.rear++;
  },

  dequeue: function () {
    var removed = this.storage[this.front];
    if (this.front < this.rear) {
      this.front++;
    }
    return removed;
  },

  size: function () {
    return this.rear - this.front;
  }
};


