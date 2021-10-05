class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
    this.count = 0;
  }

  push(value) {
    this.storage[this.count++] = value;
  }

  pop() {
    return this.storage[--this.count];
  }

  size() {
    if (this.count < 0) {
      return 0;
    } else {
      return this.count;
    }
  }


}