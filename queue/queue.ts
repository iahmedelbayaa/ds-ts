import LinkedList from '../LinkedList/linked-list';

class Queue<T> implements Iterable<T> {
  private list: LinkedList<T>;
  constructor() {
    this.list = new LinkedList();
  }
  [Symbol.iterator](): Iterator<T, any, undefined> {
    throw new Error('Method not implemented.');
  }
  public length(): number {
    if (this.list) return this.list.length;
    return 0;
  }
  //isEmpty
  public isEmpty(): boolean {
    return !this.length;
  }
  //clear
  public clear(): void {
    this.list?.clear;
  }
  enqueue(item: T): void {
    this.list.addBack(item);
  }
  //dequeue
  public dequeue(): void {
    return this.list.removeFront();
  }

  //peekFront
  public peekFront(): T | null {
    return this.list.peekFront();
    }
    
    //peekBack
    public peekBack(): T | null{
        return this.list.peekBack();
    }
    
}

export default Queue;
