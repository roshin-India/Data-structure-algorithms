const A = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
function subarrsum(A) {
  let sum = 0;
  let ans = A[0];
  for (let i = 0; i < A.length; i++) {
    sum = sum + A[i];
    ans = Math.max(ans, sum);
    if (sum < 0) {
      sum = 0;
    }
  }
  return ans;
}
res = subarrsum(A);
console.log("res", res);
