function nodeCount(A) {
  if (A == null) return 0;
  let lc = nodeCount(A.left);
  let rc = nodeCount(A.right);
  let ans = lc + rc + 1;
  return ans;
}

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}
let root = new Node(1);
root.left = new Node(2);
root.left.left = new Node(6);
root.right = new Node(3);
root.right.left = new Node(4);
root.right.left.left = new Node(5);
console.log("", nodeCount(root));
