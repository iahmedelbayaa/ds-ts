class CircularBuffer<T> {
  private buffer: Array<T | undefined>;
  private size: number;
  private head: number = 0;
  private tail: number = 0;
  private count: number = 0;

  constructor(size: number) {
    this.size = size;
    this.buffer = new Array(size);
  }

  enqueue(item: T): void {
    if (this.count === this.size) {
      throw new Error('Buffer is full');
    }

    this.buffer[this.tail] = item;
    this.tail = (this.tail + 1) % this.size;
    this.count++;
  }

  dequeue(): T | undefined {
    if (this.count === 0) {
      throw new Error('Buffer is empty');
    }

    const item = this.buffer[this.head];
    this.buffer[this.head] = undefined;
    this.head = (this.head + 1) % this.size;
    this.count--;

    return item;
  }

  peek(): T | undefined {
    if (this.count === 0) {
      return undefined;
    }

    return this.buffer[this.head];
  }

  isEmpty(): boolean {
    return this.count === 0;
  }

  isFull(): boolean {
    return this.count === this.size;
  }

  getSize(): number {
    return this.size;
  }

  getCount(): number {
    return this.count;
  }
}

// Example usage:
const circularBuffer = new CircularBuffer<number>(5);

circularBuffer.enqueue(1);
circularBuffer.enqueue(2);
circularBuffer.enqueue(3);

console.log(circularBuffer.dequeue()); // Output: 1
console.log(circularBuffer.peek()); // Output: 2

circularBuffer.enqueue(4);
circularBuffer.enqueue(5);
circularBuffer.enqueue(6); // Throws an error because the buffer is full

console.log(circularBuffer.isFull()); // Output: true
console.log(circularBuffer.getSize()); // Output: 5
