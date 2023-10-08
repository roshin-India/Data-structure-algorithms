const A = [5, 17, 100, 11];
const B = 2;
function numberofcows(mid, A) {
  let count = 1;
  let prev = A[0];
  for (let i = 0; i < A.length; i++) {
    if (A[i] - prev >= mid) {
      count++;
      prev = A[i];
    }
  }
  return count;
}
function aggressiveCows(A, B) {
  A.sort((a, b) => a - b);
  let l = 1;
  let r = A[A.length - 1] - A[0];
  let mid = 0;
  while (l <= r) {
    mid = Math.floor((l + r) / 2);
    if (numberofcows(mid, A) >= B && numberofcows(mid + 1, A) < B) {
      return mid;
    }
    if (numberofcows(mid, A) < B) {
      r = mid - 1;
    } else {
      l = mid + 1;
    }
  }
}
const res = aggressiveCows(A, B);
console.log("res", res);
