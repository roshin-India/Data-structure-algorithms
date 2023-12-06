class node{
  constructor(val,left=null,right=null){
    this.data=val;
    this.left=left;
    this.right=right;
  }
}
const node1=new node(1);
const node2=new node(2);
const node3=new node(3);
const node4=new node(4);
const node5=new node(5);
const node6=new node(6);
const node7=new node(7);

node1.left=node2;
node1.right=node3;
node2.left=node6;
node2.right=node7;
node3.left=node4;
node3.right=node5;
function levelOrder(node1){
    let queue=[];
    queue.push(node1);
    let result =[];
    let child =[];
    let last=node1;
   while(queue.length !== 0){
    
    let x = queue.shift();
    child.push(x.data);
    if(x.left != null) queue.push(x.left);
    if(x.right != null) queue.push(x.right);

    if(x == last){
      result.push(child);
      child =[];
      last = queue[queue.length-1];
    }
   }
   return result;
}
const res = levelOrder(node1);
console.log(res)