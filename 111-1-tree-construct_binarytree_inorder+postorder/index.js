
class Node {
    constructor(val, left = null,right=null) {
        this.data = val;
        this.left = left;
        this.right=right;
    }
}
function getIndex(val,InArr,strtIn,endIn){
    for(let i=0;i<InArr.length;i++){
        if(InArr[i] == val){
            return i;
        }
    };
    return null
}
function buildTree(A,B,strtIn,endIn,endPost){
    if(strtIn > endIn){
        return null;
    }
    let root  = new Node(B[endPost])
    let index=getIndex(B[endPost],A,strtIn,endIn)
    let countLeft =index-strtIn;
    let countright =endIn-index;
    root.left = buildTree(A,B,strtIn,index-1,endPost-countright-1);
    root.right = buildTree(A,B,index+1,endIn,endPost-1);
    return root;
}
const res = buildTree([4,2,7,5,1,3,6],[4,7,5,2,6,3,1],0,6,6);
console.log(res)