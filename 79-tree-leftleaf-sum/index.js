function leftleafsum(A) {
  let sum = 0;
  function leftleaf(A, isLeft = 0) {
    if (A == null) return 0;
    let lsum = leftleaf(A.left, 1);
    let rsum = leftleaf(A.right, 0);

    if (!A.left && !A.right && isLeft) {
      console.log(A.data, sum);
      sum = sum + A.data;
    }
  }
  leftleaf(A);
  return sum;
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
console.log("", leftleafsum(root));
