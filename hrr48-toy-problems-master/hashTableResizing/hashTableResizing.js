

// This is a "hashing function". You don't need to worry about it, just use it
// to turn any string into an integer that is well-distributed between
// 0 and max - 1
var getIndexBelowMaxForKey = function(str, max) {
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    hash = (hash << 5) + hash + str.charCodeAt(i);
    hash = hash & hash; // Convert to 32bit integer
    hash = Math.abs(hash);
  }
  return hash % max;
};

/**
 * Create a hash table with `insert()`, `retrieve()`, and `remove()` methods.
 * Be sure to handle hashing collisions correctly.
 * Set your hash table up to double the storage limit as
 * soon as the total number of items stored is greater than
 * 3/4th of the number of slots in the storage array.
 * Resize by half whenever utilization drops below 1/4.
 */
var makeHashTable = function() {
  var result = {};
  var storage = [];
  var storageLimit = 4;
  var size = 0;

  result.insert = function(key, value) {
    var index = getIndexBelowMaxForKey(key, storageLimit);
    if (storage[index] === undefined) {
      storage[index] = ([[key, value]]);
    } else if (this.retrieve(key) !== undefined) {
      var bucket = storage[index];
      for (var i = 0; i < bucket.length; i++) {
        if (bucket[i][0] === key) {
          bucket[i][1] = value;
        }
      }
    } else {
      storage[index].push([key, value]);
    }
    size++;
    if (size > (3/4 * storageLimit)) {
      console.log('Your storage limit has doubled to ' + (storageLimit * 2) + '.');
      this.resize(storageLimit * 2);
    }
  };


  result.retrieve = function(key) {
    var index = getIndexBelowMaxForKey(key, storageLimit);
    var bucket = storage[index];

    if (bucket === undefined) {
      return undefined;
    }

    for (var i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === key) {
        return bucket[i][1];
      }
    }
  };

  result.remove = function(key) {
    var index = getIndexBelowMaxForKey(key, storageLimit);
    var bucket = storage[index];
    for (var i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === key) {
        console.log('The key and value of ' + key + ' and ' + bucket[i][1] + ' have been removed from your Hash Table.');
        bucket.splice(i, 1);
        size--;
        if (size < (1/4 * storageLimit)) {
          console.log('Your storage limit has been cut in half to ' + (storageLimit / 2) + '.');
          this.resize(storageLimit / 2);
        }
      }
    }
  };

  result.resize = function(newSize) {
    var oldStorage = storage;
    storageLimit = newSize;
    storage = [];

    for (var i = 0; i < oldStorage.length; i++) {
      if (oldStorage[i]) {
        for (var m = 0; m < oldStorage[i].length; m++) {
          var index = getIndexBelowMaxForKey(oldStorage[i][m][0], storageLimit);
          var bucket = storage[index];
          this.insert(oldStorage[i][m][0], oldStorage[i][m][1]);
        }
      }
    }
  }

  return result;
};
