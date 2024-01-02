import LinkedList from '../LinkedList/linked-list';

class Stack<T> implements Iterable<T> {
  [Symbol.iterator](): Iterator<T, any, undefined> {
    throw new Error('Method not implemented.');
  }
  private list: LinkedList<T> | undefined;
  constructor() {
    this.list = new LinkedList<T>();
  }
  //size
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
  //push
  public push(item: T): void {
    this.list?.addBack(item);
  }
  //pop
  public pop() {
    return this.list?.removeBack();
  }
  //peek
  public peek(): T | null {
    return this.list!.peekBack();
  }
}

export default Stack;
