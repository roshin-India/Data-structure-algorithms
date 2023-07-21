const A = "111011001";
function consecutiveOnes(A) {
  let newA = A.split("");
  let n = newA.length;
  let c = 0;
  for (let i = 0; i < n; i++) {
    c = c + +A[i];
  }
  if (c == n) {
    return n;
  }
  if (c == 0) {
    return 0;
  }
  let ans = 0;
  for (let i = 0; i < n - 1; i++) {
    if (A[i] == 0) {
      let l = 0;
      let r = 0;
      for (let j = i - 1; j >= 0; j--) {
        if (A[j] == 1) {
          l++;
        } else break;
      }
      for (let j = i + 1; j < n; j++) {
        if (A[j] == 1) {
          r++;
        } else break;
      }
      let count = l + r;
      if (count < c) {
        count += 1;
      }
      if (count > ans) {
        ans = count;
      }
    }
  }
  return ans;
}

res = consecutiveOnes(A);
console.log("res", res);
