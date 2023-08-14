function nodeValsum(A) {
  if (A == null) return 0;
  let ls = nodeValsum(A.left);
  let rs = nodeValsum(A.right);
  let ans = ls + rs + A.data;
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
console.log("", nodeValsum(root));
