class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.top = null;
        this.size = 0;
    }

    // Push an element onto the stack
    push(data) {
        const newNode = new Node(data);
        newNode.next = this.top;
        this.top = newNode;
        this.size++;
    }

    // Pop an element from the stack
    pop() {
        if (!this.isEmpty()) {
            const poppedItem = this.top.data;
            this.top = this.top.next;
            this.size--;
            return poppedItem;
        } else {
            return null;
        }
    }

    // Peek at the top element of the stack without removing it
    peek() {
        return this.isEmpty() ? null : this.top.data;
    }

    // Check if the stack is empty
    isEmpty() {
        return this.size === 0;
    }

    // Get the size of the stack
    getSize() {
        return this.size;
    }
}

// Example usage:
const myStack = new Stack();
console.log("myStack",myStack)
myStack.push(1);

myStack.push(2);

myStack.push(3);
myStack.pop()
console.log("pop",myStack)
console.log("Peek:", myStack.peek()); // Output: 3
console.log("Size:", myStack.getSize()); // Output: 3

console.log("Pop:", myStack.pop()); // Output: 3

console.log("Peek:", myStack.peek()); // Output: 2
console.log("Size:", myStack.getSize()); // Output: 2
