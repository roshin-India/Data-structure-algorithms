const A = [6, 3, 3, 6];
const B = [
  [0, 3],
  [0, 2],
];
function rangeSumQueryArray(A, B) {
  let sum = [];
  let PF = [];
  PF[0] = A[0];
  for (i = 1; i < A.length; i++) {
    PF[i] = PF[i - 1] + A[i];
  }
  for (i = 0; i < B.length; i++) {
    let nwar = B[i];
    let L = nwar[0];
    let R = nwar[1];
    if (L == 0) {
      sum[i] = PF[R];
    } else {
      sum[i] = PF[R] - PF[L - 1];
    }
  }
  return sum;
}

const res = rangeSumQueryArray(A, B);
console.log(res);
