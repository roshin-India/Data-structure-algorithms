const A = [
  [1, 2],
  [3, 4],
];
function totalsubmatrixSum(A) {
  let sum = 0;
  let n = A.length;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      let contribute = (i + 1) * (j + 1) * (n - i) * (n - j);
      let eachcontribute = A[i][j] * contribute;
      sum += eachcontribute;
    }
  }
  return sum;
}

res = totalsubmatrixSum(A);
console.log("res", res);
