class StackNode {
    constructor(value) {
        this.data = value;
        this.next = null;
    }

    set next(n) {
        this.next = n;
    }

    get data() {
        return this.data;
    }
}

class Stack {
    constructor() {
        this.top = null;
        this.count = 0;
    }

    isEmpty() {
        return this.top === null;
    }

    push(data) {
        let node = new StackNode(data);
        if( this.top === null ) {
            this.top = node;
            return;
        }

        node.next = this.top;
        this.top = node;
        this.count++;
    }

    pop() {
        if( this.top === null ) {
            return;
        } 

        let topData = this.top.data;
        this.top = this.top.next;
        this.count--;
        return topData;
    }

    sort() {
        
    }

    peek() {
        if( this.top === null ) {
            return null;
        }
        return this.top.data;
    }
}

class SetOfStacks extends Stack {
    constructor(size) {
        super();
        this.size = size;
    }

    push(value) {
        let topStack = super.peek();
        if( topStack.count === this.size ) {
            //create new Stack
            let newStack = new Stack();
            newStack.push(value);
            super.push(newStack);
            return;
        }

        topStack.push(value);
    }

    peek() {
        if( super.isEmpty() ) {
            return null;
        }

        return super.peek().peek();
    }

    pop() {
        if( super.isEmpty() ) {
            return null;
        }

        let topOfTopStack = super.peek().pop();
        if( super.peek().count === 0 ) {
            super.pop();
        }
        return topOfTopStack;
    }

    isEmpty() {
        return super.isEmpty();
    }
}

class MyQueue {
    constructor() {
        this.newestStack = new Stack();
        this.oldestStack = new Stack();
    }

    add(value) {
        this.newestStack.push(value);
    }

    shiftStacks() {
        if( this.oldestStack.isEmpty() ) {
            while( !this.newestStack.isEmpty() ) {
                this.oldestStack.push(this.newestStack.pop())
            }
        }
    }

    remove() {
        shiftStacks();
        return this.oldestStack.pop();
    }

    peek() {
        shiftStacks();
        return this.oldestStack.peek();
    }
}