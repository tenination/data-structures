var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  newTree.children = [];  // fix me
  extend(newTree, treeMethods);

  return newTree;
};





var treeMethods = {};

treeMethods.addChild = function(value) {
	var child = Tree();
	child.value = value;
	this.children.push(child);
};

treeMethods.contains = function(target, node) {
	node = node || this;
	if (node.value === target) {
		return true;
	}
	for(var i = 0; i < node.children.length; i++) {
		var result = node.contains(target, node.children[i]);
		if (result === true) {
			return true;
		}
	}
	return false;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */

 
 var extend = function(obj1, obj2)  {
 	for(var key in obj2) {
 		obj1[key] = obj2[key];
 	}
 };
