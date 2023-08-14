function sqrRootNotPefectSquare(n) {
  let i = 1;
  let ans = 0;
  while (i * i <= n) {
    ans = i;
    i++;
  }
  return ans;
}
function countFactors(A) {
  let count = 0;
  let sRoot = sqrRootNotPefectSquare(A);
  for (let i = 1; i <= sRoot; i++) {
    if (A % i == 0) {
      if (i != A / i) {
        count = count + 2;
      } else {
        count = count + 1;
      }
    }
  }
  return count;
}
let res = countFactors(100);
console.log("output:", res);
