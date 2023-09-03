function mergeInversionCount(A, B, count) {
  console.log("A=>", A);
  console.log("B=>", B);
  let n = A.length;
  let m = B.length;
  let i = 0;
  let j = 0;
  let C = [];
  let inversionCount = count;
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
      inversionCount = inversionCount + (n - i);
      j++;
    }
  }
  return [C, inversionCount];
}

function mergeSort(D, count) {
  let n = D.length;
  if (n <= 1) {
    return [D, count];
  }

  let mid = Math.floor(n / 2);
  let left = D.slice(0, mid);
  let right = D.slice(mid);
  let [A, leftCount] = mergeSort(left, count);
  let [B, rightCount] = mergeSort(right, leftCount);
  let [mergedArray, inversionCount] = mergeInversionCount(A, B, rightCount);
  return [mergedArray, inversionCount];
}

const D = [4, 5, 1, 2, 6, 3];
let n = D.length;
res = mergeSort(D, 0) % (10 ** 9 + 7);
console.log("res", res[1]);
