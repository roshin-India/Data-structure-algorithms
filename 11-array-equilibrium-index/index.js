const A = [-7, 1, 5, 2, -4, 3, 0];

function equilibriumIndexArray(A) {
  let PF = prefixSumArray(A);
  let count = [];

  let n = A.length;
  for (let i = 0; i < n; i++) {
    let left = 0;
    if (i != 0) {
      left = PF[i - 1];
    }
    let right = PF[n - 1] - PF[i];
    if (left == right) {
      count.push(i);
    }
  }

  let min = count[0];

  for (let i = 0; i < count.length; i++) {
    if (count[i] < min) {
      min = count[i];
    }
  }
  if (count.length == 0) {
    return -1;
  } else {
    return min;
  }
}
function prefixSumArray(A) {
  let PF = [];
  PF[0] = A[0];
  for (let i = 1; i < A.length; i++) {
    PF[i] = PF[i - 1] + A[i];
  }
  return PF;
}

const res = equilibriumIndexArray(A);
console.log(res);
