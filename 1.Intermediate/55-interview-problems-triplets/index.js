const A = [2, 1, 2, 3];
function noofTriplets(A) {
  let n = A.length;
  let ans = 0;
  for (let j = 0; j < n; j++) {
    let l = 0;
    let r = 0;
    for (let i = 0; i < j; i++) {
      //console.log("dsdff", i, j, A[i], A[j]);
      if (A[i] < A[j]) {
        l++;
        //console.log("srtrt", A[i], A[j], l);
      }
    }
    for (let k = j + 1; k < n; k++) {
      if (A[j] < A[k]) {
        r++;
      }
    }
    ans = ans + l * r;
  }
  return ans;
}

res = noofTriplets(A);
console.log("res", res);
