var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(stackMethods);
  someInstance.stackSize = 0;
  someInstance.storage = {};
  return someInstance;
};

var stackMethods = {};

stackMethods.push = function(value) {
	this.storage[this.stackSize] = value;
	this.stackSize++;
}
stackMethods.size = function() {
	return this.stackSize;
}
stackMethods.pop = function() {
	if (this.stackSize > 0) {
		this.stackSize--;
		var popped = this.storage[this.stackSize];
		return popped;
	}
	return undefined;
}


