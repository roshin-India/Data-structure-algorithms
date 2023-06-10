const A = [2, 1, 8, 3, 9];
const B = [
  [0, 3],
  [2, 4],
];
function sumofEvenindexedArray(A, B) {
  let pfe = [];
  pfe[0] = A[0];
  for (let i = 1; i < A.length; i++) {
    if (i % 2 == 0) {
      pfe[i] = pfe[i - 1] + A[i];
    } else {
      pfe[i] = pfe[i - 1];
    }
  }
  let res = [];
  for (let i = 0; i < B.length; i++) {
    let s = B[i][0];
    let e = B[i][1];
    if (s == 0) {
      res.push(pfe[e]);
    } else {
      res.push(pfe[e] - pfe[s - 1]);
    }
  }
  return res;
}
const res = sumofEvenindexedArray(A, B);
console.log(res);
