var LinkedListNode = function(value){
	this.value = value;
	this.next = null;
}

var LinkedList = function(){
	this.head = null;
	this.tail = null;
}

LinkedList.prototype.addToTail = function(value) {
  var newTail = new LinkedListNode(value);
  if(!this.head){
  	this.head = newTail;
  }
  if(this.tail){
  	this.tail.next = newTail;
  }
  this.tail = newTail;
}

LinkedList.prototype.removeHead = function(value) {
  var head = this.head;
  this.head = new LinkedListNode(value);
  this.head.next = head.next;
  head.next = null;
  return head.value;
}

LinkedList.prototype.contains = function(value) {
  this.head.checkList(value);
}

LinkedListNode.prototype.checkList = function(value){
	if(this.value === value) {
		return true;
	} else if (this.next){
    this.next.checkList(value);
	} else {
		return false;
	}
}

