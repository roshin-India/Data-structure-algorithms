const A = [
  [1, 3],
  [2, 6],
  [8, 10],
  [15, 18],
];
function mergeIntervals(A) {
  const ans = [];
  A.sort((a, b) => a[0] - b[0]);
  const N = A.length;
  ans.push(A[0]);
  for (let i = 1; i < N; i++) {
    //  previous
    const s1 = ans[ans.length - 1][0];
    const e1 = ans[ans.length - 1][1];
    // current
    const s2 = A[i][0];
    const e2 = A[i][1];

    if (e1 < s2) {
      // not overlapping
      ans.push([s2, e2]);
    } else {
      // overlapping
      ans[ans.length - 1] = [Math.min(s1, s2), Math.max(e1, e2)];
    }
  }
  return ans;
}

const res = mergeIntervals(A);
console.log(res); // Output: 16
