const A = [1, 3, 5, 9];
const B = 6;
function sortedInsertPosition(A, B) {
  let r = A.length - 1;
  let l = 0;
  let mid = 0;
  while (l <= r) {
    mid = Math.floor((l + r) / 2);
    if (A[mid] == B) {
      return mid;
    }
    if (A[mid] < B) {
      l = mid + 1;
    } else {
      r = mid - 1;
    }
  }
  if (r == mid) {
    mid++;
  }
  return mid;
}
res = sortedInsertPosition(A, B);
console.log("res", res);
