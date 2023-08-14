const A = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 2, 3, 4],
];
function matrixColumnSum(A) {
  const N = A.length;
  const M = A[0].length;
  let sumArr = [];
  for (let j = 0; j < M; j++) {
    let columnsum = 0;
    for (let i = 0; i < N; i++) {
      columnsum = columnsum + A[i][j];
    }
    sumArr.push(columnsum);
  }
  return sumArr;
}

const res = matrixColumnSum(A);
console.log("---", res);
