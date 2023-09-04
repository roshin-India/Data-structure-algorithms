function sumDiff(A) {
  let n = A.length;
  const mod = 1000000007;
  A.sort((a, b) => a - b);
  let x = 0;
  let y = 0;
  for (let i = 0; i < n; i++) {
    x += (A[i] * Math.pow(2, i)) % mod;
    y += (A[i] * Math.pow(2, n - i - 1)) % mod;
  }
  let ans = (x - y) % mod;
  return ans < 0 ? ans + mod : ans;
}
const A = [1, 2];
console.log("res", sumDiff(A)); // Output 1
