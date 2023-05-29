A = [2, 6, 1, 6, 9];
let N = A.length;
function minmaxClosestArray(A) {
  const minMax = minmaxArray(A);
  const minval = minMax.a;
  const maxval = minMax.b;
  if (minval == maxval) {
    return 1;
  }
  let ans = N;
  let mini = -1;
  let maxi = -1;
  for (let i = N - 1; i >= 0; i--) {
    if (A[i] == minval) {
      mini = i;
      if (maxi != -1) {
        ans = min(ans, maxi - mini + 1);
      }
    }
    if (A[i] == maxval) {
      maxi = i;
      if (mini != -1) {
        ans = min(ans, mini - maxi + 1);
      }
    }
  }
  return ans;
}
function minmaxArray(A) {
  let minval = A[0];
  let maxval = A[0];
  for (let i = 1; i < N; i++) {
    if (A[i] > maxval) {
      maxval = A[i];
    }
    if (A[i] < minval) {
      minval = A[i];
    }
  }
  return { a: minval, b: maxval };
}
function min(a, b) {
  if (a < b) return a;
  else return b;
}

const res = minmaxClosestArray(A);
console.log("---", res);
