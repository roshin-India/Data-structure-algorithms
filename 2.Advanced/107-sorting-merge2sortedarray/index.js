const A = [3, 7, 9];
const B = [2, 10, 19];
function merge(A, B) {
  let n = A.length;
  let m = B.length;
  let i = 0;
  let j = 0;
  let C = [];
  for (let k = 0; k <= m + n - 1; k++) {
    if (i == n) {
      C[k] = B[j];
      j++;
    } else if (j == m) {
      C[k] = A[i];
      i++;
    } else if (A[i] <= B[j]) {
      C[k] = A[i];
      i++;
    } else {
      C[k] = B[j];
      j++;
    }
  }
  return C;
}
let res = merge(A, B);
console.log("res", res);
