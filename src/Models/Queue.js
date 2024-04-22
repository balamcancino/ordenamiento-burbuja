import { Node } from './Node.js';

export class Queue {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    enqueue(value) {
        let newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
    }

    dequeue() {
        if (!this.head) {
            return null;
        }
        let value = this.head.value;
        this.head = this.head.next;
        if (!this.head) {
            this.tail = null;
        }
        return value;
    }

    peek() {
        if (!this.head) {
            return null;
        }
        return this.head.value;
    }

    isEmpty() {
        return this.head === null;
    }

    size() {
        let count = 0;
        let current = this.head;
        while (current) {
            count++;
            current = current.next;
        }
        return count;
    }

    sortBubble(by) {
        let swapped;
        let current;
        let nextNode = null;

        if (this.isEmpty()) {
            return;
        }

        do {
            swapped = false;
            current = this.head;

            while (current.next !== nextNode) {
                if (current.value[by] > current.next.value[by]) {
                    let temp = current.value;
                    current.value = current.next.value;
                    current.next.value = temp;
                    swapped = true;
                }
                current = current.next;
            }
            nextNode = current;
        } while (swapped);
    }
}
