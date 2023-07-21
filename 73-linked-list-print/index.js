function printLinkedList(head) {
  let current = head;
  let result = "";

  while (current !== null) {
    result += current.val + " ";
    current = current.next;
  }

  console.log(result);
}

// Define the LinkedListNode class
class LinkedListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

// Create the linked list
const A = new LinkedListNode(1);
A.next = new LinkedListNode(2);
A.next.next = new LinkedListNode(3);

// Print the linked list
printLinkedList(A);
