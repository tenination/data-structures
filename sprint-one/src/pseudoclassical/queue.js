var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.qSize = 0;
  this.storage = {};
};

Queue.prototype.enqueue = function(value) {
	this.storage[this.qSize] = value;
	this.qSize++;

};
Queue.prototype.dequeue = function() {
	if (this.qSize > 0) {
		this.qSize--;
		var dequeued = this.storage[0];
		for (var i = 0; i < this.qSize; i++) {
			this.storage[i] = this.storage[i+1];
		}
		if (this.qSize === 0) {
			this.storage[0] = undefined;
		}
	}
	return dequeued; 
	
};
Queue.prototype.size = function(value) {
	return this.qSize;
};

