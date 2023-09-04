const A = [
  94, 87, 100, 11, 23, 98, 17, 35, 43, 66, 34, 53, 72, 80, 5, 34, 64, 71, 9, 16,
  41, 66, 96,
];
const B = 19;
function kthSmallest(A, B) {
  let n = A.length;
  for (let i = 0; i < B; i++) {
    let minid = i;
    for (let j = i; j < n; j++) {
      if (A[j] < A[minid]) {
        minid = j;
      }
    }
    let temp = A[minid];
    A[minid] = A[i];
    A[i] = temp;
  }
  return A[B - 1];
}
res = kthSmallest(A, B);
console.log("res", res);
