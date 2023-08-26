const A = [1, 2, 3, 1, 2, 4];
function twouniqueElement(A) {
  let a = 0;
  let n = A.length;
  for (let i = 0; i < n; i++) {
    a = a ^ A[i];
  }
  let b = -1;
  for (let i = 0; i <= 30; i++) {
    if ((a >> i) & 1) {
      b = i;
      break;
    }
  }
  console.log("b", b);
  let x = 0;
  let y = 0;
  for (let i = 0; i < n; i++) {
    if (((A[i] >> b) & 1) == 1) {
      x = x ^ A[i];
    } else {
      y = y ^ A[i];
    }
  }
  let ans = [];
  ans[0] = x;
  ans[1] = y;
  ans.sort((a, b) => a - b);
  return ans;
}

res = twouniqueElement(A);
console.log("dfde", res);
