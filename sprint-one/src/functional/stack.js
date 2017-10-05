var Stack = function() {
  var someInstance = {};
  var size = 0;

  // Use an object with numeric keys to store values
  var storage = {
    
  };

  // Implement the methods below
  someInstance.push = function(value) {
    storage[size] = value;
    size++;
  };

  someInstance.pop = function() {
    //store the element that will be discarded from stack
    var popped = storage[size-1];
    size > 0 ? size-- : 0;
    //delete element that will be discarded from stack
    delete storage[size];
    return popped;
    
  };

  someInstance.size = function() {
    return size;
  };

  return someInstance;
};


