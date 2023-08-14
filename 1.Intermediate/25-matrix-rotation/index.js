const A = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

function matrixRotation(A) {
  const transArr = transposeSquare(A);
  const revArr = transposeReverse(transArr);
  return revArr;
}
function transposeReverse(trans) {
  for (let i = 0; i < trans.length; i++) {
    let p1 = 0;
    let p2 = trans[0].length - 1;
    while (p1 < p2) {
      let temp = trans[i][p1];
      trans[i][p1] = trans[i][p2];
      trans[i][p2] = temp;
      p1++;
      p2--;
    }
  }
  return trans;
}
function transposeSquare(A) {
  const N = A.length;
  const M = A[0].length;
  for (let i = 0; i < N; i++) {
    for (let j = i + 1; j < M; j++) {
      let temp = A[i][j];
      A[i][j] = A[j][i];
      A[j][i] = temp;
    }
  }
  return A;
}
const res = matrixRotation(A);
console.log("---", res);
