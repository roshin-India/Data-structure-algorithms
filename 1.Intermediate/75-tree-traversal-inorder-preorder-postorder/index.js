function postorderTraverse(node) {
  let res = [];
  function postorder(node) {
    if (node === null) {
      return;
    }
    postorder(node.left);
    postorder(node.right);
    res.push(node.data);
  }
  postorder(node);
  return res;
}
function preorderTraverse(node) {
  let res = [];
  function preorder(node) {
    if (node === null) {
      return;
    }
    res.push(node.data);
    preorder(node.left);
    preorder(node.right);
  }
  preorder(node);
  return res;
}
function inorderTraverse(node) {
  let res = [];
  function inorder(node) {
    if (node === null) {
      return;
    }
    inorder(node.left);
    res.push(node.data);
    inorder(node.right);
  }
  inorder(node);
  return res;
}

class TreeNode {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}
// Create the binary tree
const root1 = new TreeNode(1);
root1.right = new TreeNode(2);
root1.right.left = new TreeNode(3);
console.log("preorderTraverse", preorderTraverse(root1));
console.log("inorderTraverse", inorderTraverse(root1));
console.log("postorderTraverse", postorderTraverse(root1));
