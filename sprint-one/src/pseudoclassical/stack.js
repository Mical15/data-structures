var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  this.storage = {};
  this.count = 0; 

};

Stack.prototype.push = function(value) {
  this.storage[this.count++] = value;
};

Stack.prototype.pop = function() {
  return this.storage[--this.count];
};

Stack.prototype.size = function() {
  if (this.count < 0) {
    return 0;
  } else {
    return this.count;
  }
};
