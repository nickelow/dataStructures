var Queue = function() {
	this.head = null;
	this.size = 0;
}

var Node = function(val) {
	this.value = val
	this.next = null
}

Queue.prototype.enqueue = function(data) {
	var node = new Node(data)
	if(!this.head){
		this.head = node
	} else {
		head = this.head;
		while(head.next){
			head = head.next
		}
		head.next = node
	}
	this.size++
	return node
}

Queue.prototype.dequeue = function() {
	temp = this.head;
	this.head = this.head.next;
	this.size --;
	return temp;
}