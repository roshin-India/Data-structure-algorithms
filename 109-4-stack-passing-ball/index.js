
const A=10
const B = 23
const C = [86, 63, 60, 0, 47, 0, 99, 9, 0, 0]
function ballPassing(A,B,C) {
  const stack=[B];
  
    for(let i=0;i<A;i++){
      if(C[i]===0){
        stack.pop();
      }
        
      else 
        stack.push(C[i]);
    }
    return stack[stack.length-1];

}

const res =ballPassing(A,B,C)
console.log("result",res); 
