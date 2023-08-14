const A = [2, 3, -1, 4, 2, 1];
const B = 4;
function maxsumBothsidesArray(A, B) {
  let n = A.length;
  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum = sum + A[i];
  }
  if (n == B) {
    return sum;
  }
  let pf = [];
  pf[0] = A[0];
  for (let i = 1; i < n; i++) {
    pf[i] = pf[i - 1] + A[i];
  }
  let s = 0;
  let e = n - B - 1;
  maxsum = sum - pf[e];
  s++;
  e++;
  while (e < n) {
    let diffsum = sum - (pf[e] - pf[s - 1]);
    if (diffsum > maxsum) {
      maxsum = diffsum;
    }
    s++;
    e++;
  }
  return maxsum;
}
const res = maxsumBothsidesArray(A, B);
console.log(res);
