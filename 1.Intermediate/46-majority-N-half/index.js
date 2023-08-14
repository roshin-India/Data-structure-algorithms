const A = [2, 1, 2];
function majorityNHalf(A) {
  let majority = Number(A[0]);
  let count = 1;
  for (i = 1; i < A.length; i++) {
    if (Number(A[i]) == majority && count > 0) {
      count++;
    } else if (count > 0) {
      count--;
    }
    if (count == 0) {
      majority = Number(A[i]);
      count = 1;
    }
  }
  return majority;
}

const res = majorityNHalf(A);
console.log(res);
