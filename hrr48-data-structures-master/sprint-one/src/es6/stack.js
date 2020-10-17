class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
    this.counter = 0;
  }

  push(value) {
    this.storage[this.counter] = value;
    this.counter++;
  }


  pop() {
    var removed = this.storage[this.counter - 1];
    delete this.storage[this.counter - 1];

    if (this.counter > 0) {
      this.counter--;
    }

    return removed;
  }

  size() {
    return this.counter;
  }


}