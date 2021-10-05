var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(queueMethods);

  storage = {};
  first = 0;
  last = 0;

  return someInstance;
};

var queueMethods = {

  'enqueue' : function(value) {
    storage[first++] = value;
  },

  'dequeue' : function() {
    return storage[last++];
  },

  'size' : function() {
    if (first - last < 0) {
      return 0;
    } else {
      return first - last;
    }
  }

};


