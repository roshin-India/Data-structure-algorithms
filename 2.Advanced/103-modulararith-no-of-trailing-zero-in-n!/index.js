const A = 300;
function trailingZeros(A) {
  let ans = 0;
  for (let i = 5; i <= A; i = i * 5) {
    ans = ans + Math.floor(A / i);
  }
  return ans;
}

let res = trailingZeros(A);
console.log("dfde", res);
