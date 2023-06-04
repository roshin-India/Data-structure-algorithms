const A = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 2, 3, 4],
];
function matrixRowSum(A) {
  const N = A.length;
  const M = A[0].length;
  let sumArr = [];
  for (let i = 0; i < N; i++) {
    let rowSum = 0;
    for (let j = 0; j < M; j++) {
      rowSum = rowSum + A[i][j];
    }
    sumArr.push(rowSum);
  }
  return sumArr;
}

const res = matrixRowSum(A);
console.log("---", res);
