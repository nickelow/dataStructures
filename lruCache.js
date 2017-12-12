var LRUCache = function(capacity) {
    this.head = null;
    this.tail = null;
    this.size = 0;
    this.capacity = capacity;
    this.map = {}
};

LRUCache.prototype.node = function(key, value){
  var node = {
    
  }
  node.key = key;
  node.value = value;
  node.next = null;
  node.prev = null;
  return node
}

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
  if(this.map[key]){
    var value = this.map[key].value
    var newNode = this.node(key, value)
    this.remove(key);
    this.setHead(newNode);
    return value
  } else {
    return null;
  }
};

LRUCache.prototype.setHead = function(node) {
  node.next = this.head;
  if(this.head !== null){
    this.head.prev = node
  }
  this.head = node;
  if(this.tail === null){
    this.tail = node;
  }
  this.size++;
  this.map[node.key] = node
}

LRUCache.prototype.remove = function(key) {
  var node = this.map[key]
  if(node.prev !== null) {
    node.prev.next = node.next;
  } else {
    this.head = node.next
  }
  if(node.next !== null){
    node.next.prev = node.prev
  } else {
    this.tail = node.prev
  }
  delete this.map[key];
  this.size--
}

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    var node = this.node(key, value)
    if (this.map[key]){
      this.map[key].value = node.value;
      this.remove(node.key)
    } else {
      if(this.size >= this.capacity) {
        delete this.map[this.tail.key];
        this.size--;
        this.tail = this.tail.prev;
        this.tail.next = null;
      }
    }
    this.setHead(node)
};