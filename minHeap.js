class MinHeap {
  constructor(data = []) {
    this.array = [];
    if (data && Array.isArray(data)) {
      this.array = data;
      const length = this.array.length;
      for (let i = Math.floor((length - 1) / 2); i >= 0; i--) {
        this.bubbleDown(i, this.array[i]);
      }
    }
  }

  shouldSwap(child, parent) {
    return child.date< parent.date;
  }

  getParentIndex(childIndex) {
    return Math.floor((childIndex - 1) / 2);
  }

  getLeftChild(parentIndex) {
    return (parentIndex * 2) + 1;
  }

  getRightChild(parentIndex) {
    return (parentIndex * 2) + 2;
  }

  add(log) {
    if (log.date === undefined) {
      throw new Error('data must be valid to add');
    }
    this.array.push(log);
    this.bubbleUp(this.array.length - 1, log);
  }

  removeHead() {
    const headNode = this.array[0];
    const tailNode = this.array.pop();
    if (this.array.length) {
      this.array[0] = tailNode;
      this.bubbleDown(0, tailNode);
    }
    return headNode;
  }

  bubbleDown(parentIndex, parent) {
    if (parentIndex < this.array.length) {
      let targetIndex = parentIndex;
      let targetData = parent;
      const leftChildIndex = this.getLeftChild(parentIndex);
      const rightChildIndex = this.getRightChild(parentIndex);
      const trySwap = (index, array, shouldSwap) => {
        if (index < array.length) {
          const data = array[index];
          if (shouldSwap(data, targetData)) {
            targetIndex = index;
            targetData = data;
          }
        }
      };
      trySwap(leftChildIndex, this.array, this.shouldSwap);
      trySwap(rightChildIndex, this.array, this.shouldSwap);
      if (targetIndex !== parentIndex) {
        this.array[parentIndex] = targetData;
        this.array[targetIndex] = parent;
        this.bubbleDown(targetIndex, parent);
      }
    }
  }

  bubbleUp(childIndex, child) {
    if (childIndex > 0) {
      const parentIndex = this.getParentIndex(childIndex);
      const parent = this.array[parentIndex];
      if (this.shouldSwap(child, parent)) {
        this.array[parentIndex] = child;
        this.array[childIndex] = parent;
        this.bubbleUp(parentIndex, child);
      }
    }
  }

}
