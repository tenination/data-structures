var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  
  var newInstance = {};
  newInstance.storage = {};
  newInstance.queueSize = 0;

  extend(newInstance, queueMethods);
  return newInstance;

};

var queueMethods = {
  size: function() { 
  	return this.queueSize; 
  },
  enqueue: function(value) { 
  	this.storage[this.queueSize] = value; 
  	this.queueSize++; 
  },
  dequeue: function() { 
  	if (!this.queueSize) {
  	 return undefined;
  	}
  	this.queueSize--;
  	var dequeued = this.storage[0];
  	for(var i = 0; i < this.queueSize; i++) {
  	  this.storage[i] = this.storage[i+1];
  	}
  	if (!this.queueSize) {
  	  this.storage[0] = undefined;
  	}
  	return dequeued; 
  }

};

var extend = function(obj1,obj2) {
    for (var key in obj2) {
  	  obj1[key] = obj2[key];
    }
  
};
 
  
  


