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
function verticalOrder(node1){
  let map = new Map();
  let minval=Number.POSITIVE_INFINITY;
  let maxval=Number.NEGATIVE_INFINITY;
    let queue=[];
    queue.push([node1,0]);
  while(queue.length > 0){
    const [n,lvl]=queue[0];
    queue.shift();
    minval = Math.min(minval, lvl);
    maxval = Math.max(maxval, lvl);
    if(map.has(lvl)){
      map.set(lvl,[...map.get(lvl),n.data])
    }
    else{
      map.set(lvl,[n.data])
    }
    if(n.left != null) queue.push([n.left,lvl-1]);
    if(n.right != null) queue.push([n.right,lvl+1]);
  }
    let result=[];
    for(let i=minval;i<=maxval;i++){
      result.push(map.get(i));
    }
    
  
   return result;

}
const res = verticalOrder(node1);
console.log(res)