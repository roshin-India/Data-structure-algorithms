const A = [3, 4, -1, 1];
function firstMissingInteger(A) {
  const n = A.length;
  for (let i = 0; i < n; i++) {
    if (A[i] <= 0) {
      A[i] = n + 2;
    }
  }
  for (let i = 0; i < n; i++) {
    const element = Math.abs(A[i]);
    if (element >= 1 && element <= n) {
      const index = element - 1;
      A[index] = -1 * Math.abs(A[index]);
    }
  }
  for (let i = 0; i < n; i++) {
    if (A[i] > 0) {
      return i + 1;
    }
  }
  return n + 1;
}

const res = firstMissingInteger(A);
console.log(res); // Output: 16
