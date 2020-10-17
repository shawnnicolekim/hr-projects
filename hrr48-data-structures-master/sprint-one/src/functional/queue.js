var Queue = function () {
  var someInstance = {};

  // Use an object with numeric keys to store values
  someInstance.storage = {};
  someInstance.front = 0;
  someInstance.rear = 0;

  // Implement the methods below

  someInstance.enqueue = function (value) {
    // add val to storage
    someInstance.storage[someInstance.rear] = value;
    // increment rear
    someInstance.rear++;
  };

  someInstance.dequeue = function () {
    var removed = someInstance.storage[someInstance.front];
    if (someInstance.front < someInstance.rear) {
      someInstance.front++;
    }
    return removed;
  };

  someInstance.size = function () {
    return someInstance.rear - someInstance.front;
  };

  return someInstance;
};


// allows sequentially adding and removing items‣
// AssertionError: expected 'a' to equal 'b'queue.enqueue('a');
// expect(queue.dequeue()).to.equal('a');
// queue.enqueue('b');
// expect(queue.dequeue()).to.equal('b');