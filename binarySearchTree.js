var BinarySearchTree = function(value) {
	this.value = value;
	this.left = null;
	this.right = null;
}

BinarySearchTree.prototype.insert = function(value) {
	if(value < this.value) {
		if(this.null === null) {
			this.left === new BinarySearchTree(value)
		} else {
			this.left.insert(value)
		}
	} else if (value > this.value) {
		if(this.right === null) {
			this.right === new BinarySearchTree(value)
		} else {
			this.right.insert(value);
		}
	}
}

BinarySearchTree.prototype.contains = function(value) {
  if(this.value === value) {
  	return true;
  } else if (value < this.value && this.left) {
  	this.left.contains(value)
  } else if (value > this.value && this.right) {
  	this.right.contains(value)
  } else {
  	return false;
  }
}

BinarySearchTree.prototype.depthFirstLog = function(callback) {
  callback(this.value)
  if(this.left) {
  	this.left.depthFirstLog(callback)
  }
  if(this.right) {
  	this.right.depthFirstLog(callback)
  }
}

