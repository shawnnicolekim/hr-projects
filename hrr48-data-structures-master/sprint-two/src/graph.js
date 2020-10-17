

// Instantiate a new graph
var Graph = function () {
  // this = object.create(Graph.prototype)   (implied)
  this.nodes = {};
  this.edges = {};
  // return this   (implied)
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function (node) {
  if (this.nodes[node]) {
    return 'This node already exists';
  }
  this.nodes[node] = node;
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function (node) {
  if (this.nodes[node] !== undefined) {
    return true;
  } else {
    return false;
  }
};

// Removes a node from the graph.
Graph.prototype.removeNode = function (node) {
  delete this.nodes[node];
  // has to remove all edges connected to that Node as well
  for (var pairs in this.edges) {
    if (this.edges[pairs].includes(node)) {
      delete this.edges[pairs];
    }
  }

};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function (fromNode, toNode) {
  if (this.edges[[fromNode, toNode]] !== undefined) {
    return true;
  }

  if (this.edges[[toNode, fromNode]] !== undefined) {
    return true;
  }

  return false;
};


// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function (fromNode, toNode) {
  // since graph is undirected, [to, from] should be functionally identical to [from, to], so this will check if either form of that edge exists before creating a new edge to avoid duplicate edges
  if (this.edges[[toNode, fromNode]] !== undefined || this.edges[[fromNode, toNode]] !== undefined) {
    return 'This edge already exists';
  }
  this.edges[[fromNode, toNode]] = [fromNode, toNode];
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function (fromNode, toNode) {
  if (this.edges[[fromNode, toNode]] !== undefined) {
    delete this.edges[[fromNode, toNode]];
  }

  if (this.edges[[toNode, fromNode]] !== undefined) {
    delete this.edges[[toNode, fromNode]];
  }
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function (cb) {
  for (var keys in this.nodes) {
    cb(this.nodes[keys]);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
   Graph: constant
   addNode: constant
   contains: constant
   removeNode: linear
   hasEdge: constant
   addEdge: constant
   removeEdge: constant
   forEachNode: linear
 */


