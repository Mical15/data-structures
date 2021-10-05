var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  this.storage = {};
  this.first = 0;
  this.last = 0;

};

Queue.prototype.enqueue = function(value) {
  this.storage[this.first++] = value;
};

Queue.prototype.dequeue = function() {
  return this.storage[this.last++];
};

Queue.prototype.size = function() {
  if (this.first - this.last < 0) {
    return 0;
  } else {
    return this.first - this.last;
  }
};



