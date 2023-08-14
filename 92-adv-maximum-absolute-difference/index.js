const A = [1, 3, -1];
function maxabsdiff(A) {
  let x = [];
  let y = [];
  for (let i = 0; i < A.length; i++) {
    x[i] = A[i] + i;
    y[i] = A[i] - i;
  }
  let resx = minmax(x);
  let resy = minmax(y);
  return Math.max(resx, resy);
}

res = maxabsdiff(A);
console.log("res", res);

function minmax(x) {
  console.log("d");
  let max = x[0];
  let min = x[0];
  for (let i = 0; i < x.length; i++) {
    if (x[i] > max) {
      max = x[i];
    }
    if (x[i] < min) {
      min = x[i];
    }
  }
  return max - min;
}
