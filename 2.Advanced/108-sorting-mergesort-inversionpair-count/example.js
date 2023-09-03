function merge(A, B) {
  console.log("A=>", A);
  console.log("B=>", B);
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
  console.log("bvtyv", C);
  return C;
}

function mergeSort(D) {
  let n = D.length;
  if (n <= 1) {
    return D;
  }

  let mid = Math.floor(n / 2);
  let left = D.slice(0, mid);
  let right = D.slice(mid);
  let A = mergeSort(left);
  let B = mergeSort(right);
  return merge(A, B);
}

const D = [1, 3, 2];
let n = D.length;
res = mergeSort(D);
console.log("res", res);
