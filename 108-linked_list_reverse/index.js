
class LinkedListNode {
  constructor(val, next = null) {
    this.data = val;
    this.next = next;
  }
}
// Create the linked list
const A = new LinkedListNode(1);
A.next = new LinkedListNode(2);
A.next.next = new LinkedListNode(3);
A.next.next.next = new LinkedListNode(4);

function reverseLinkedList(A) {
  let prev = null;
  let current = JSON.parse(JSON.stringify(A)); 
  let next=null;
  while(current != null){
    next = current.next;
    current.next =prev;
    prev = current;
    current = next;
  }
  A = prev;
  return A;
}
const res = reverseLinkedList(A)
console.log("result",res); 
