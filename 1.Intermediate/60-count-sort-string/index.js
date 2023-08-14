const A = [1, 3, 1];
function countsort(A) {
  let n = A.length;
  let k = maxArray(A);
  let countarr = new Array(k + 1).fill(0);
  for (let i = 0; i < n; i++) {
    countarr[A[i]]++;
  }
  let x = 0;
  for (let i = 0; i < countarr.length; i++) {
    for (let j = 0; j < countarr[i]; j++) {
      if (countarr[i] != 0) {
        A[x++] = i;
      }
    }
  }
  return A;
}
function maxArray(A) {
  let max = A[0];
  for (let i = 1; i < A.length; i++) {
    if (A[i] > max) {
      max = A[i];
    }
  }
  return max;
}

res = countsort(A);
console.log("res", res);
