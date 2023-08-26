const A = [53, 39, 88];
function maxANDpair(A) {
  let ans = 0;
  let n = A.length;
  let val = 0;
  for (let b = 30; b >= 0; b--) {
    let count = 0;
    for (let i = 0; i < n; i++) {
      val = (Number(A[i]) >> b) & 1;
      count += val;
    }
    console.log(`Bit position ${b}: Count = ${count}`);
    if (count >= 2) {
      ans |= 1 << b;
      for (let i = 0; i < n; i++) {
        if (((Number(A[i]) >> b) & 1) == 0) {
          A[i] = 0;
        }
      }
    }
  }
  return ans;
}

let res = maxANDpair(A);
console.log("dfde", res);
