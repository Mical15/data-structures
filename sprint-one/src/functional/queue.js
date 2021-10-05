var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var first = 0;
  var last = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[first] = value;
    first++;
  };

  someInstance.dequeue = function() {
    var deletedValue = storage[last];
    delete storage[last];
    last++;
    return deletedValue;
    // delete storage[last];
    // last += 1;
  };

  someInstance.size = function() {
    // if (last < 0) {
    //   return 0;
    // } else {
    //   return last;
    // }
    // if (storage.length < 0 || storage.length === undefined) {
    //   return 0;
    // } else {
    //   return storage.length;
    // }
    
    if (first - last < 0) {
      return 0;
    } else {
      return first - last;
    }
  };

  return someInstance;
};
