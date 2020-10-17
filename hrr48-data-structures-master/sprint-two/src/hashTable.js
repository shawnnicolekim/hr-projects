

var HashTable = function () {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function (k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);

  var findTuple = function (buck) {
    for (var i = 0; i < buck.length; i++) {
      if (buck[i][0] === k) {
        return buck[i];
      }
    }
  };
  if (bucket === undefined) {
    this._storage.set(index, ([[k, v]]));
  } else if (findTuple(bucket)) {
    var currentTuple = findTuple(bucket);
    if (currentTuple[1] === v) {
      return 'This key and value is already in the hash table';
    } else {
      currentTuple[1] = v;
    }
  } else {
    this._storage.set(index, bucket.concat([[k, v]]));
  }
};

// v1, val1 => ... => [[v1, val1]]
// v2, val2 => [[v1, val1]] => [[v1, val1], [v2, val2]]
// v1, val3 => [[v1, val1], [v2, val2]] =>[[v1, val3], [v2, val2]]


HashTable.prototype.retrieve = function (k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);

  var findValue = function (buck) {
    for (var i = 0; i < buck.length; i++) {
      if (buck[i][0] === k) {
        return buck[i][1];
      }
    }
  };

  if (bucket !== undefined) {
    return findValue(bucket);
  }

  return undefined;
};

HashTable.prototype.remove = function (k) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  var deleteKey = function (value, index, storage) {
    if (storage[index] === value) {
      delete storage[index];
    }
  };

  this._storage.each(deleteKey);
};


/*
 * Complexity: What is the time complexity of the above functions?
   HashTable: constant
   insert: linear because it has to iterate through a whole bucket in worst case, but practically constant because a good hash table will be so well distributed that no bucket would ever be that full
   retrieve: linear but again practically constant for the same reasons as insertion
   remove: linear, since our implementation iterates through every bucket to check for the key value pair you are trying to remove--in a perfect hash table this would be linear but practically constant
 */
