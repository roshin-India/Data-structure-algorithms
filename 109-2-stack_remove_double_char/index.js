
const A="abccbc"
let n=A.length
function removeDoublrChar(A) {
  const stack=[];
  
    for(let i=0;i<n;i++){
      if(stack.length>0&&stack[stack.length-1]==A[i])
        stack.pop();
      else 
        stack.push(A[i]);
    }
    return stack.join('');
}
const res = removeDoublrChar(A)
console.log("result",res); 
