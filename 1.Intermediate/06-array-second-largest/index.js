const Ar = [5, 2, 3, 1];
function secondmaxAray(A) {
  let max = -Infinity;
  let secmax = -Infinity;
  if (A.length == 1) {
    return -1;
  }

  for (let i = 0; i < A.length; i++) {
    if (Number(A[i]) > max) {
      secmax = max;
      max = Number(A[i]);
    } else if (Number(A[i]) > secmax && Number(A[i]) < max) {
      secmax = Number(A[i]);
    }
  }
  if (secmax == -Infinity) {
    return -1;
  }
  return secmax;
}

const res = secondmaxAray(Ar);
console.log(res);
