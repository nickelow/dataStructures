var hashTable = function(limit) {
  this.storage = [];
  this.size = 0;
  this.limit = limit;
}

hashTable.prototype.insert = function(key, value) {
  var index = getIndexBelowMaxForKey(key, this.limit);
  var bucket = this.storage[index] || index;
  for (var i = 0; i < bucket.length; i++){
  	var tuple = bucket[i];
  	if(tuple[0] === key){
  		var oldVal = tuple[1];
  		tuple[1] = value;
  		return oldVal;
  	}
  }
  bucket.push([key, value])
  this.storage[index] = bucket;
  this.size++;
}

hashTable.prototype.retrieve = function(key) {
  var index = getIndexBelowMaxForKey(key);
  var bucket = this.storage[index];
  for (var i = 0; i < bucket.length; i++) {
  	if(bucket[i][0] === key){
  		return bucket[i];
  	}
  }
  return undefined;
}
hashTable.prototype.remove = function (key) {
  var index = getIndexBelowMaxForKey(key);
  var bucket = this.storage[index];
  for (var i = 0; i < bucket.length; i++) {
  	var tuple = bucket[i]
  	if(tuple[0] === key){
  		this.storage.splice(i, 1);
  		this.size--;
  		if(this.size < this.limit * 0.25){
  			this.resize();
  		}
  		return tuple[1];
  	}
  }
}

hashTable.prototype.resize = function() {
  var oldStorage = this.storage;
  this.limit = this.limit / 2;
  this.size = 0;
  this.storage = [];
  oldStorage.forEach(function(bucket){
  	for(var i = 0; i < bucket.length; i++) {
  		var tuple = bucket[i];
  		this.insert(tuple[0], tuple[1])
  	}
  }).bind(this);
}

//hashing function
var getIndexBelowMaxForKey = function(str, max) {
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    hash = (hash << 5) + hash + str.charCodeAt(i);
    hash = hash & hash; // Convert to 32bit integer
    hash = Math.abs(hash);
  }
  return hash % max;
};