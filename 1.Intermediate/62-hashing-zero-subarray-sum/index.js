const A = [
  96, -71, 18, 66, -39, -32, -16, -83, -11, -92, 55, 66, 93, 5, 50, -45, 66,
  -28, 69, -4, -34, -87, -32, 7, -53, 33, -12, -94, -80, -71, 48, -93, 62,
];
function zerosubarrsumHash(A) {
  let n = A.length;
  let sumset = new Set();
  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum = sum + A[i];
    if (sum == 0 || sumset.has(sum)) {
      return 1;
    }
    sumset.add(sum);
  }
  return 0;

  // let n = A.length;
  // let PF = [];
  // PF[0] = A[0];
  // for (let i = 1; i < n; i++) {
  //   PF[i] = PF[i - 1] + A[i];
  // }
  // // return PF;
  // for (let i = 0; i < n; i++) {
  //   if (PF[i] == 0) {
  //     return 1;
  //   }
  //   sumset.add(PF[i]);
  // }
  // if (sumset.size > n) {
  //   return 1;
  // } else {
  //   return 0;
  // }
}

res = zerosubarrsumHash(A);
console.log("res", res);
