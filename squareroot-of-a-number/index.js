function squareRoot(A) {
  if (A == 1) {
    return 1;
  }
  for (let i = 1; i < A; i++) {
    if (i * i == A) {
      return i;
    }
  }
  return -1;
}
let res = squareRoot(100);
console.log("output:", res);
