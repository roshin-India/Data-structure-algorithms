const A = [3, 2, 1, 3];
function nobleInteger(A) {
  let count = 0;
  let n = A.length;
  A.sort((a, b) => a - b);
  if (A[n - 1] == 0) {
    return 1;
  }
  //Check array length greater than 1
  if (n > 0) {
    for (let i = n - 2; i >= 0; i--) {
      if (A[i] != A[i + 1]) {
        count = n - (i + 1);
      }
      if (count == A[i]) {
        return 1;
      }
    }
  }
  return -1;
}

const res = nobleInteger(A);
console.log(res);
