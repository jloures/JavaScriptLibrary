'use strict';
class QueueNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
    }

    peek() {
        return this.first;
    }

    remove() {
        if( this.first === null ) {
            return null;
        }

        let topOfQueue = this.first;
        this.first = this.first.next;
        if( this.first === null ) {
            this.last = null;
        }
        return topOfQueue;
    }

    add(data) {
        let newNode = new QueueNode(data);
        if( this.last !== null ) {
            this.last.next = newNode;
        }
        this.last = newNode;
        if( this.first === null ) {
            this.first = this.last;
        }
    }

    isEmpty() {
        return this.first === null;
    }
}