const A = 2;
const B = 5;
const C = [1, 10];
function numberOfPainters(mid, T, C) {
  let count = 1;
  let time = mid;
  for (let i = 0; i < C.length; i++) {
    if (C[i] * T > mid) return -1;

    if (C[i] * T <= time) {
      time = time - C[i] * T;
    } else {
      count++;
      time = mid - C[i] * T;
    }
  }
  return count;
}
function painterspartition(A, B, C) {
  let l = Math.max(...C) * B;
  let r = C.reduce((acc, val) => acc + val * B, 0);
  let mid = 0;
  while (l <= r) {
    mid = Math.floor((l + r) / 2);
    if (
      numberOfPainters(mid, B, C) <= A &&
      numberOfPainters(mid - 1, B, C) > A
    ) {
      return mid % 10000003;
    }
    if (numberOfPainters(mid, B, C) > A) {
      l = mid + 1;
    } else {
      r = mid - 1;
    }
  }
  return mid % 10000003;
}
const res = painterspartition(A, B, C);
console.log("res", res);
