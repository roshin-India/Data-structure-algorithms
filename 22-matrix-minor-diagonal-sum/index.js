const A = [
  [1, 2, 3],
  [5, 6, 7],
  [9, 2, 3],
];
function matrixDiagonalSumRL(A) {
  const N = A.length;
  const M = A[0].length;
  let diagSumRL = 0;
  let i = 1;
  let j = M;
  while (i <= N && j >= 0) {
    diagSumRL = diagSumRL + A[i - 1][j - 1];
    i++;
    j--;
  }
  return diagSumRL;

  // const n = A.length;
  // let diagonalSum = 0;

  // for (let i = 1; i <= n; i++) {
  //   let j = n - i + 1;
  //   diagonalSum += A[i - 1][j - 1];
  // }

  // return diagonalSum;
}

const res = matrixDiagonalSumRL(A);
console.log("---", res);
