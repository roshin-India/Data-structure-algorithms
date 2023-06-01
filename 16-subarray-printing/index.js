A = [4, 2, 2];
B = 0;
C = 2;
function printSubarray(A, B, C) {
  const subarray = [];
  for (let i = B; i <= C; i++) {
    subarray.push(A[i]);
  }
  return subarray;
}

const res = printSubarray(A, B, C);
console.log("---", res);
