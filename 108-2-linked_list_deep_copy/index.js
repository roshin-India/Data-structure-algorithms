
class LinkedListNode {
  constructor(val, next = null,random=null) {
    this.data = val;
    this.next = next;
    this.random=random;
  }
}
// Create the linked list
const node1 = new LinkedListNode(1);
const node2 = new LinkedListNode(2);
const node3 = new LinkedListNode(3);
node1.next=node2;
node2.next=node3;
//create random pointers
node1.random=node3;
node2.random=node1;
node3.random=node1;

 function copyLinkedList(head) {
  if (head == null) {
    return null;
    }

    let originalNode = head;

    // Step 1: Create copied nodes and insert them between original nodes
    while (originalNode != null) {
        let copiedNode = new LinkedListNode(originalNode.data);
        copiedNode.next = originalNode.next;
        originalNode.next = copiedNode;
        originalNode = copiedNode.next;
    }

    // Step 2: Assign random pointers for copied nodes
    originalNode = head;
    while (originalNode != null) {
        if (originalNode.random) {
        originalNode.next.random = originalNode.random.next;
        }
        originalNode = originalNode.next.next;
    }

    // Step 3: Separate the original and copied lists
    originalNode = head;
    let copiedHead = head.next;
    while (originalNode != null) {
        let copiedNode = originalNode.next;
        originalNode.next = copiedNode.next;
        if (copiedNode.next) {
            copiedNode.next = copiedNode.next.next;
        }
        originalNode = originalNode.next;
    }

    return copiedHead;
  }
 const res = copyLinkedList(node1)
console.log("result",node1); 
