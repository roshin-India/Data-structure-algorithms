const A = [
  [1, 2, 3],
  [5, 6, 7],
  [9, 2, 3],
];
function matrixDiagonalSum(A) {
  const N = A.length;
  const M = A[0].length;
  let diagSum = 0;
  let i = 0;
  let j = 0;
  while (i < N) {
    diagSum = diagSum + A[i][j];
    i++;
    j++;
  }
  return diagSum;
}

const res = matrixDiagonalSum(A);
console.log("---", res);
