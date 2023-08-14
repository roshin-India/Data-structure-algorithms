function insertList(A, B, C) {
  let newNode = new LinkedListNode(B);
  if (C == 0) {
    A = insertAtFirsthead(A, B, newNode);
  } else {
    A = insertBetween(A, B, C, newNode);
  }
  return A;
}
function insertAtFirsthead(A, B, newNode) {
  newNode.next = A;
  A = newNode;
  return A;
}

function insertBetween(A, B, C, newNode) {
  let count = 1;
  let head = A;
  while (head) {
    if (count === C) {
      let tempNode = head.next;
      head.next = newNode;
      newNode.next = tempNode;
    }

    if (head.next === null && C > count) {
      head.next = newNode;
      newNode.next = null;
    }

    head = head.next;
    count++;
  }
  return A;
}
class LinkedListNode {
  constructor(val, next = null) {
    this.data = val;
    this.next = next;
  }
}
// Create the linked list
const A = new LinkedListNode(1);
A.next = new LinkedListNode(2);

// Insert a node with value 3 at position 0
const B = 3;
const C = 7;
let res = insertList(A, B, C);
console.log("res", res);
