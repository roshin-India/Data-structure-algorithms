const A = [1, 1, 2, 2, 3, 5, 5];
function findUnique(A) {
  let n = A.length;
  let l = 0;
  let r = n - 1;
  while (l <= r) {
    let mid = Math.floor((l + r) / 2);
    if (
      (mid == 0 || A[mid] != A[mid - 1]) &&
      (mid == n - 1 || A[mid] != A[mid + 1])
    ) {
      return A[mid];
    }
    if (mid != 0 && A[mid] == A[mid - 1]) {
      if (mid % 2 == 0) {
        r = mid - 1;
      } else {
        l = mid + 1;
      }
    } else {
      if (mid % 2 == 0) {
        l = mid + 1;
      } else {
        r = mid - 1;
      }
    }
  }
  return -1;
}

const res = findUnique(A);
console.log("res", res);
