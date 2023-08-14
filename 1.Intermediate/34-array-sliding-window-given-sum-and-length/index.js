const A = [6, 3, 3, 6, 7, 8, 7, 3, 7];
const B = 2;
const C = 10;
function givensumandlengthSlidingwindowArray(A, B, C) {
  let n = A.length;
  let s = 0;
  let e = B - 1;
  let sum = 0;
  for (let i = s; i <= e; i++) {
    sum = sum + Number(A[i]);
  }
  if (sum == C) {
    return 1;
  }
  s++;
  e++;
  while (e < n) {
    sum = Number(sum) - Number(A[s - 1]) + Number(A[e]);
    if (sum == C) {
      return 1;
    }
    s++;
    e++;
  }
  return 0;
}
const res = givensumandlengthSlidingwindowArray(A, B, C);
console.log(res);
