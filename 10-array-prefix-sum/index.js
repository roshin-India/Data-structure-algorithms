const A = [6, 3, 3, 6];

function prefixSumArray(A) {
  let PF = [];
  PF[0] = A[0];
  for (let i = 1; i < A.length; i++) {
    PF[i] = PF[i - 1] + A[i];
  }
  return PF;
}

const res = prefixSumArray(A);
console.log(res);
