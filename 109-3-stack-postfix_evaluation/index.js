
const A=["2", "1", "+", "3", "*"]
let n=A.length
function expressionEvalRPN(A) {
  const stack=[];
  
    for(let i=0;i<n;i++){
      if(A[i]=="+"||A[i]=="-"||A[i]=="*"||A[i]=="/"){
          operand2=stack.pop();
          operand1=stack.pop();
          const result = evaluate(operand1,operand2,A[i]); 
          stack.push(result);
      }
        
      else 
        stack.push(Number(A[i]));
    }
    return stack[0];

}
function evaluate(operand1,operand2,operator){
  switch (operator) {
    case '+':
      return operand1 + operand2;
    case '-':
      return operand1 - operand2;
    case '*':
      return operand1 * operand2;
    case '/':
      return Math.trunc(operand1 / operand2);
  }    
}
const res = expressionEvalRPN(A)
console.log("result",res); 
