const A=[4,5,2,10,8];
function nearestSmallNeighbour(A) {
  let n=A.length;
  let res=new Array(n).fill(-1);
  const stack=[];
  
    for(let i=0;i<n;i++){
      while(stack.length>0 && stack[stack.length-1]>=A[i]){
        stack.pop();
      }
        
      if(stack.length>0){
        res[i]=stack[stack.length-1]
      }

      stack.push(A[i]);
    }
    return res;

}

const result =nearestSmallNeighbour(A);
console.log("result",result); 
