const A = [
  [1, 2],
  [4, 5],
  [7, 8],
];

function transposeNonSquare(A) {
  const r = A.length;
  const c = A[0].length;

  const newR = A[0].length;
  const newC = A.length;
  let newarr = new Array(newR);
  for (let i = 0; i < newarr.length; i++) {
    newarr[i] = new Array(newC);
  }
  for (let row = 0; row < r; row++) {
    for (let col = 0; col < c; col++) {
      newarr[col][row] = A[row][col];
    }
  }
  return newarr;
}
// function transposeSquare(A) {
//   const N = A.length;
//   const M = A[0].length;
//   for (let i = 0; i < N; i++) {
//     for (let j = i + 1; j < M; j++) {
//       let temp = A[i][j];
//       A[i][j] = A[j][i];
//       A[j][i] = temp;
//     }
//   }
//   return A;
// }

const res = transposeNonSquare(A);
console.log("---", res);
