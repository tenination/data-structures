var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  if (this._storage.get(index) === undefined) {
    this._storage.set(index, [k,v]);
  } else {
    var temp = this._storage.get(index);
    this._storage.set(index, [[k,v], temp]);
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  if (this._storage.get(index)[0][1] !== undefined) {
    
    for(var i = 0; i < this._storage.get(index).length; i++) {
      if (this._storage.get(index)[i][0] === k) {
        return this._storage.get(index)[i][1];
      }
    }
    
  }
  
   return this._storage.get(index)[1];

};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  this._storage.set(index, [k]);
 
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


