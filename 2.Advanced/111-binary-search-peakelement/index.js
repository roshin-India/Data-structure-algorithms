const A = [2, 4, 1000000000, 3, 1000000000, 1];
// 18, 33, 100, 135, 203, 270, 292, 310, 356, 392, 400, 429, 436, 461, 427, 403,
// 399, 375, 251, 245, 173, 130, 43,

function peakElement(A) {
  let n = A.length;
  let l = 0;
  let r = n - 1;
  while (l <= r) {
    mid = Math.floor((l + r) / 2);
    if (
      (mid == 0 || A[mid] > A[mid - 1]) &&
      (mid == n - 1 || A[mid] > A[mid + 1])
    ) {
      return A[mid];
    }
    if (mid !== n - 1 && A[mid] < A[mid + 1]) {
      l = mid + 1;
    } else {
      r = mid - 1;
    }
  }

  return A[++mid];
}
res = peakElement(A);
console.log("res", res);
