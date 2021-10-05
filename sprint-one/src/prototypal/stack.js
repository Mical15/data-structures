var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(stackMethods);
  storage = {};
  count = 0;

  return someInstance;
};

var stackMethods = {

  'push' : function(value) {
    storage[count++] = value;
  },

  'pop' : function() {
    return storage[--count];
  },

  'size' : function() {
    if (count < 0) {
      return 0;
    } else {
      return count;
    }
  }

};


