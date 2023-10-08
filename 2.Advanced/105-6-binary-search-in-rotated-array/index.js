const A = [4, 5, 6, 7, 0, 1, 2, 3];
const B = 4;
function rotatedSearch(A, B) {
  let n = A.length;
  let l = 0;
  let r = n - 1;
  while (l <= r) {
    let mid = Math.floor((l + r) / 2);
    if (A[mid] == B) {
      return mid;
    }
    if (B < A[0]) {
      //Target B is in second part
      if (mid >= A[0]) {
        //Mid is in first part
        l = mid + 1;
      } else {
        //Mid is in second part
        if (A[mid] < B) {
          l = mid + 1;
        } else {
          r = mid - 1;
        }
      }
    } else {
      //Target B is in first part
      if (A[mid] < A[0]) {
        //Mid is in second part
        r = mid - 1;
      } else {
        //Mid is in first part
        if (A[mid] < B) {
          l = mid + 1;
        } else {
          r = mid - 1;
        }
      }
    }
  }
  return -1;
}

const res = rotatedSearch(A, B);
console.log("res", res);
