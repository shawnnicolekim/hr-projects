var Queue = function () {
  var obj = Object.create(queueMethods);

  obj.front = 0;
  obj.rear = 0;
  obj.storage = {};

  return obj;
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


