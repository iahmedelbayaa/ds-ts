class MinBinaryHeap<T> {
  private heap: T[] = [];

  insert(value: T): void {
    this.heap.push(value);
    this.heapifyUp();
  }

  extractMin(): T | undefined {
    if (this.isEmpty()) {
      return undefined;
    }

    const min = this.heap[0];
    const last = this.heap.pop();

    if (this.heap.length > 0) {
      this.heap[0] = last!;
      this.heapifyDown();
    }

    return min;
  }

  isEmpty(): boolean {
    return this.heap.length === 0;
  }

  private heapifyUp(): void {
    let index = this.heap.length - 1;

    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);

      if (this.heap[index] < this.heap[parentIndex]) {
        // Swap the current element with its parent if it violates the heap property
        [this.heap[index], this.heap[parentIndex]] = [
          this.heap[parentIndex],
          this.heap[index],
        ];
        index = parentIndex;
      } else {
        break;
      }
    }
  }

  private heapifyDown(): void {
    let index = 0;

    while (true) {
      const leftChildIndex = 2 * index + 1;
      const rightChildIndex = 2 * index + 2;
      let smallest = index;

      if (
        leftChildIndex < this.heap.length &&
        this.heap[leftChildIndex] < this.heap[smallest]
      ) {
        smallest = leftChildIndex;
      }

      if (
        rightChildIndex < this.heap.length &&
        this.heap[rightChildIndex] < this.heap[smallest]
      ) {
        smallest = rightChildIndex;
      }

      if (smallest !== index) {
        // Swap the current element with the smallest child if it violates the heap property
        [this.heap[index], this.heap[smallest]] = [
          this.heap[smallest],
          this.heap[index],
        ];
        index = smallest;
      } else {
        break;
      }
    }
  }
}

// Example usage:
const minHeap = new MinBinaryHeap<number>();
minHeap.insert(4);
minHeap.insert(8);
minHeap.insert(2);
minHeap.insert(5);

console.log(minHeap.extractMin()); // Output: 2
console.log(minHeap.extractMin()); // Output: 4
