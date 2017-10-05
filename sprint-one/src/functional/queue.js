var Queue = function() {
  var someInstance = {}; //first in, last out (FILO), //last in, first out (LIFO) - {stack} "if you are last, you are first, if you are first you are last"
  //first in, first out (FIFO), //last in, last out (LILO) - "if you first, you are first. if you are last, you are last"
  var size = 0;

  // Use an object with numeric keys to store values
  var storage = {
  
  };

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[size] = value;
    size++;
  };

  someInstance.dequeue = function() {
    
    if (size === 0) {
      return undefined;
    }

    size--;
    var dequeued = storage[0];
    for (var i = 0; i < size; i++) {
      storage[i] = storage[i+1];
    }

    if (!size) {
      storage[0] == undefined;
    }

    return dequeued;
    
  };

  someInstance.size = function() {
    return size;
  };

  return someInstance;
};
