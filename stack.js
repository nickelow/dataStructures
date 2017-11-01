var Stack = function(value){
  this.storage = new LinkedList(value);
  this.size = 1;
}

Stack.prototype.push = function(value) {
  this.storage.addToTail(value);
  this.size++;
}

Stack.prototype.pop = function() {
  var popped = this.storage.tail;
  this.storage.tail = null;
  
}

Stack.prototype.size = function() {
	return this.size;
}