var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(queueMethods);
  someInstance.qSize = 0;
  someInstance.storage = {};
  return someInstance;
};

var queueMethods = {};

queueMethods.size = function() {
	return this.qSize;
}
queueMethods.enqueue = function(value) {
	this.storage[this.qSize] = value;
	this.qSize++;
}
queueMethods.dequeue = function() {
	if (this.qSize > 0) {
		this.qSize--;
		var dequeued = this.storage[0];
		for(var i = 0; i < this.qSize; i++) {
			this.storage[i] = this.storage[i+1];
		}
		
	}
	return dequeued;
}

