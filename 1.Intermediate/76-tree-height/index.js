function treeheight(A) {
  let max = 0;
  function height(A) {
    if (A == null) return 0;
    let hl = height(A.left);
    let hr = height(A.right);
    let ans = Math.max(hl, hr);
    return ans + 1;
  }
  max = height(A);
  return max;
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
console.log("", treeheight(root));
