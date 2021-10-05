var Stack = function() {
  var someInstance = {};
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  //// WHY CAN'T I USE 'var' IN FRONT OF STORAGE???
  storage = {};
  count = 0;

  _.extend(someInstance, stackMethods);
  return someInstance;

};

// var extend = function(obj, methods) {
//   for (var key in methods) {
//     obj[key] = methods[key];
//   }

// };

var stackMethods = {

  'push': function(value) {
    // this.storage[this.count++] = value;
    // storage[count++] = value;
    // this.storage[this.count++] = value;
    storage[count++] = value;
  },

  'pop': function() {
    // return this.storage[count];
    // delete this.storage[count];
    // this.count--;

    return storage[--count];

    // return this.storage[--count];
  },

  'size': function() {
  //   if (this.count < 0) {
  //     return 0;
  //   } else {
  //     return this.count;
  //   }
  // }

    if (count < 0) {
      return 0;
    } else {
      return count;
    }

  }

};


