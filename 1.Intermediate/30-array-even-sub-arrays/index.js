const A = [2, 4, 8, 7, 6];
function amazingSubArrayCount(A) {
  let n = A.length;
  if (n % 2 == 0 && A[0] % 2 == 0 && A[n - 1] % 2 == 0) return "YES";
  return "NO";
}
const res = amazingSubArrayCount(A);
console.log(res);
