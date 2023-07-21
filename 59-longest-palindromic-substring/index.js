const A = "ababa";
function longestpalindromeSubstring(A) {
  let B = A.split("");
  let n = B.length;
  let ans = 1;
  let start = 0;
  let end = 0;
  for (let i = 0; i < n; i++) {
    let d1 = i;
    let d2 = i;
    let [m, n] = expand(B, d1, d2);

    if (n - m + 1 > ans) {
      ans = n - m + 1;
      start = m;
      end = n;
    }
  }
  for (let i = 0; i < n - 1; i++) {
    let d1 = i;
    let d2 = i + 1;
    let [m, n] = expand(B, d1, d2);

    if (n - m + 1 > ans) {
      ans = n - m + 1;
      start = m;
      end = n;
    }
  }
  return A.substring(start, end);
}
function expand(A, p1, p2) {
  while (p1 >= 0 && p2 <= A.length && A[p1] == A[p2]) {
    p1 = p1 - 1;
    p2 = p2 + 1;
  }
  return [p1 + 1, p2];
}

res = longestpalindromeSubstring(A);
console.log("res", res);
