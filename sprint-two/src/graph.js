

// Instantiate a new graph
var Graph = function() {
	this.nodes = [];
	this.edges = [];
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
	this.nodes.push(node);
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
	return this.nodes.includes(node);
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
	var index = this.nodes.indexOf(node);
	this.nodes.splice(index, 1);
	//remove any edge that contains the removed node
	for (var i = 0; i < this.edges.length; i++) {
		var currentEdge = this.edges[i];
		if (currentEdge[0] === node || currentEdge[1] === node) {
			this.edges.splice(i, 1);
		}
	}
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
	var edge = [fromNode, toNode];
	for (var i = 0; i < this.edges.length; i++) {
      var currentEdge = this.edges[i];
      if (currentEdge[0] === fromNode && currentEdge[1] === toNode) {
        return true;
      }
      if (currentEdge[1] === fromNode && currentEdge[0] === toNode) {
        return true;
      }

    }
  return false;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
	var edge = [fromNode, toNode];
	this.edges.push(edge);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
	var edge = [fromNode, toNode];
	var index = this.edges.indexOf(edge);
	this.edges.splice(index, 1);
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
	for(var i = 0; i < this.nodes.length; i++) {
		var currentNode = this.nodes[i];
		cb(currentNode);
	}
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


