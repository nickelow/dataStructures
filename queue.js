var Queue = function(){
  this.storage = new LinkedList()
  this.size = 0;
}

Queue.prototype.enqueue = function(value) {
  this.storage.addToTail(value);
  this.size++;
}

Queue.prototype.dequeue = function() {
  this.storage.removeHead();
  this.size--;
}

Queue.prototype.size = function() {
	return this.size;
}