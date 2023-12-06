
class LinkedListNode {
    constructor(val, left = null,right=null) {
      this.data = val;
      this.left = left;
      this.right=right;
    }
  }
  // Create the linked list
  const node1 = new LinkedListNode(1);
  const node2 = new LinkedListNode(2);
  const node3 = new LinkedListNode(3);
  const node4 = new LinkedListNode(4);
  const node5 = new LinkedListNode(5);
  node1.left=node2;
  node1.right=node3;

  node2.left=node4;
  node2.right=node5;

function inorder(A,res){
    if(A==null){
        return;
    }
    inorder(A.left,res);
    res.push(A.data);
    inorder(A.right,res);
}
function inorderTraversal(A){
    let res =[]
    inorder(A,res);
    return res;
}
const res = inorderTraversal(node1);
console.log(res)