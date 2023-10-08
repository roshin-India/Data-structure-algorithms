const A = 11;
function Sqrt(A) {
  if (A == 0 || A == 1) {
    return A;
  }
  let l = 1;
  let r = A;
  while (l <= r) {
    let mid = Math.floor((l + r) / 2);
    if (mid * mid <= A && (mid + 1) * (mid + 1) > A) {
      return mid;
    }
    if (mid * mid > A) {
      r = mid - 1;
    } else {
      l = mid + 1;
    }
  }
  return -1;
}

const res = Sqrt(A);
console.log("res", res);
