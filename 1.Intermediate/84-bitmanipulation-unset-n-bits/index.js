let A = 5;
let B = 2;
function unsetnBits(A, B) {
  A = Number(A);
  for (let i = 0; i < B; i++) {
    if ((A & (1 << i)) == 1 << i) {
      A = A ^ (1 << i);
    }
  }
  return A;
}

res = unsetnBits(A, B);
console.log("res", res);
