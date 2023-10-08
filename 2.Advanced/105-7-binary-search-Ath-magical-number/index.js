const A = 19;
const B = 11;
const C = 13;
function gcd(A, B) {
  if (A == 0) return B;
  return gcd(B % A, A);
}
function lcm(A, B) {
  return (A * B) / gcd(A, B);
}
function countMultiples(M, X, Y) {
  return Math.floor(M / X) + Math.floor(M / Y) - Math.floor(M / lcm(X, Y));
}
function magicalNumber(A, B, C) {
  let l = Math.min(B, C);
  let r = Math.min(B, C) * A;
  while (l <= r) {
    let mid = Math.floor((l + r) / 2);
    if (countMultiples(mid, B, C) == A && (mid % B == 0 || mid % C == 0)) {
      return mid % (10 ** 9 + 7);
    }
    if (countMultiples(mid, B, C) < A) {
      l = mid + 1;
    } else {
      r = mid - 1;
    }
  }
}
const res = magicalNumber(A, B, C);
console.log("res", res);
