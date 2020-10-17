class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
    this.front = 0;
    this.rear = 0;
  }

  enqueue(value) {
    this.storage[this.rear] = value;
    this.rear++;
  }

  dequeue() {
    var removed = this.storage[this.front];
    if (this.front < this.rear) {
      this.front++;
    }
    return removed;
  }

  size() {
    return this.rear - this.front;
  }
}
