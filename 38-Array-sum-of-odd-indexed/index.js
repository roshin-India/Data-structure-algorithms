const A = [1, 2, 3, 4, 5];
const B = [
  [0, 2],
  [1, 4],
];
function sumofOddindexedArray(A, B) {
  let pfo = [];
  pfo[0] = 0;
  for (i = 1; i < A.length; i++) {
    if (i % 2 != 0) {
      console.log(i);
      pfo[i] = pfo[i - 1] + A[i];
    } else {
      pfo[i] = pfo[i - 1];
    }
  }
  let res = [];
  for (i = 0; i < B.length; i++) {
    let s = B[i][0];
    let e = B[i][1];
    if (s == 0) {
      res.push(pfo[e]);
    } else {
      res.push(pfo[e] - pfo[s - 1]);
    }
  }
  return res;
}
const res = sumofOddindexedArray(A, B);
console.log(res);
