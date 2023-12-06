
const A="}{[])}"
let n=A.length
function balancedBraces(A) {
  const stack=[];
  const bracesMap=new Map([
    ['(', ')'],
    ['[', ']'],
    ['{', '}']]);
    for(let i=0;i<n;i++){
      const currChar=A[i];
      if(bracesMap.has(currChar))
        stack.push(A[i]);
      else if(Array.from(bracesMap.values()).includes(currChar)){
        const close=stack.pop();
      
        if(bracesMap.get(close)!==currChar)
        return 0;
      }
    }
    return stack.length===0 ? 1 : 0;
}
const res = balancedBraces(A)
console.log("result",res); 
