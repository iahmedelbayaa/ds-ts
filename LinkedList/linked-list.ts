import LinkedListNode from './linked-list-node';

interface List<T> {
    head: LinkedListNode<T> | null;
    tail: LinkedListNode<T> | null;
    length: number;
}

class LinkedList<T> implements Iterable<T> {
    private list: List<T> | undefined;

    constructor() {
        this.list = undefined;
    }

    //size
    public get length(): number {
        if (this.list) return this.list.length;
        return 0;
    }
    //isEmpty
    public get isEmpty(): boolean {
        return !this.length;
    }
    //addFront
    public addFront(value: T): void {
        const node = new LinkedListNode(value);
        if (this.list) {
            node.next = this.list.head; //we create new Node
            this.list.head = node; //we put node value in node that we created it in prev line
        } else {
            this.list = {
                head: node,
                tail: node,
                length: 1
            };
        }
        this.list.length++;
    }

    //addBack
    public addBack(value: T): void {
        const node = new LinkedListNode(value);
        if (this.list) {
            if (this.list.tail) {
                this.list.tail.next = node;
                this.list.tail = node;
            } else {
                this.list.tail = node;
            }
        } else {
            this.list = {
                head: node,
                tail: node,
                length: 1
            };
        }
        this.list.length++;
    }

    //addAt
    public addAt(i: number, val: T): void{
        if (i < 0 || i > this.length) {
            throw new Error('Index out of bounds');
        }
        if (i === 0) {
            this.addFront(val);
        } else if (i === this.length) {
            this.addBack(val);
        } else {
            let cur = this.list!.head
            for (let j = 0; j < i - 1; j++) {
                cur = cur!.next;
            }
            const node = new LinkedListNode(val);
            node.next = cur!.next;
            cur!.next = node;
            this.list!.length++;
        }
    }

    //peekFront
    public peekFront(): T | null {
        if (this.list) {
            return this.list.head!.value;
        }
        return null;
    }
    //peekBack
    public peekBack(): T | null {
        if (this.list) {
            return this.list.tail!.value;
        }
        return null;
    }



    
}