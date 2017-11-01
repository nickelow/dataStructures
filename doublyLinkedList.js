var ListNode = function(value){
	this.value = value;
	this.previous = null;
	this.next = null;
}

var DoublyLinkedList = function(){
	this.head = null;
	this.tail = null;
	this.size = 0;
}

DoublyLinkedList.prototype.addToHead = function(value){
  if(!this.head){
  	this.head = new ListNode(value);
  } else {
  	var newHead = new ListNode(value);
  	newHead.next = this.head.
  	this.head.previous = newHead;
    this.head = newHead;
  }
  this.size++;
}

DoublyLinkedList.prototype.addToTail = function(value){
  if(!this.head){
  	this.addToHead(value);
  } else if (!this.tail) {
  	this.tail = new ListNode(value);
  	this.head.next = this.tail;
  	this.tail.previous = this.head
  } else {
  	var newTail = new ListNode(value);
  	newTail.previous = this.tail;
  	this.tail.next = newTail;
  	this.tail = newTail;
  }
  this.size++;
}

DoublyLinkedList.prototype.removeHead = function() {
  var oldHead = this.head;
  this.head.next = this.head;
  oldHead.next = null;
  this.head.previous = null;
  this.size--;
  return oldHead.value;
}

DoublyLinkedList.prototype.removeTail = function() {
  var oldTail = this.tail;
  this.tail = oldTail.previous;
  this.tail.next = null;
  oldTail.previous = null;
  this.size--;
  return oldTail.value;
}

DoublyLinkedList.prototype.contains = function(value) {

}