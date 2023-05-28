const Ar = [5, 5, 3, 1];
function timeEqualityArray(A) {
  let max = A[0];
  let sum = 0;
  for (let i = 0; i < A.length; i++) {
    if (A[i] > max) {
      max = A[i];
    }
  }
  for (let i = 0; i < A.length; i++) {
    if (max != A[i]) {
      sum = sum + max - A[i];
    }
  }
  return sum;
}

const res = timeEqualityArray(Ar);
console.log(res);
