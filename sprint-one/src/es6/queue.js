class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
    this.first = 0;
    this.last = 0;
  }

  enqueue(value) {
    this.storage[this.first++] = value;
  }

  dequeue() {
    return this.storage[this.last++];
  }

  size() {
    if (this.first - this.last < 0) {
      return 0;
    } else {
      return this.first - this.last;
    }
  }
}
