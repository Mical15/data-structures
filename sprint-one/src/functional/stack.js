var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var count = 0;

  // Implement the methods below
  someInstance.push = function(value) {
    storage[count++] = value;
  };

  someInstance.pop = function() {    
    // var deletedValue = storage[count];
    // delete storage[count];
    // return deletedValue;
    // count--;
    // WHY -- FIRST????!!!!
    return storage[--count];
  };

  someInstance.size = function() {
    if (count < 0) {
      return 0;
    } else {
      return count;
    }

  };

  return someInstance;
};
