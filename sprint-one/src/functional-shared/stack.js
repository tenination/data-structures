var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  someInstance.stackSize = 0;
  someInstance.storage = {};
  extend(someInstance, stackMethods);
  return someInstance;
};


var stackMethods = {
	size: function() {
		return this.stackSize;
	}, 
	push: function(value) {
		this.storage[this.stackSize] = value;
		this.stackSize++;
	}, 
	pop: function() {
		if (this.stackSize > 0) {
			this.stackSize--;
			var popped = this.storage[this.stackSize];
		  delete this.storage[this.stackSize];
		  return popped;
		} 
		return undefined;
	}
};

var extend = function(obj1, obj2) {
	for (var key in obj2) {
		obj1[key] = obj2[key];
	}
}


