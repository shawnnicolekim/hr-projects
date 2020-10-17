var Stack = function () {
  var someInstance = {};

  // Use an object with numeric keys to store values
  someInstance.storage = {};
  someInstance.counter = 0;

  // Implement the methods below
  someInstance.push = function (value) {
    someInstance.storage[someInstance.counter] = value;
    someInstance.counter++;
  };

  someInstance.pop = function () {
    var removed = someInstance.storage[someInstance.counter - 1];
    delete someInstance.storage[someInstance.counter];
    if (someInstance.counter > 0) {
      someInstance.counter--;
    }
    return removed;
  };

  someInstance.size = function () {
    return someInstance.counter;
  };

  return someInstance;
};
