const A = [0, 1, 0, 2];
function rainwaterTrapped(A) {
  let sum = 0;
  let n = A.length;
  let lmax = [];
  lmax[0] = A[0];
  let rmax = [];
  rmax[n - 1] = A[n - 1];

  for (let i = 1; i < n; i++) {
    lmax[i] = Math.max(lmax[i - 1], A[i]);
  }

  for (let j = n - 2; j >= 0; j--) {
    rmax[j] = Math.max(rmax[j + 1], A[j]);
  }

  for (let k = 1; k < n - 1; k++) {
    const minMax = Math.min(lmax[k - 1], rmax[k + 1]);
    const val = Math.max(0, minMax - A[k]);
    sum += val;
  }

  return sum;
}

const res = rainwaterTrapped(A);
console.log(res); // Output: 16
