let A = 4;
let B = 1;
function toggleBit(A, B) {
  let rslt = A ^ (1 << B);
  return rslt;
}

res = toggleBit(A, B);
console.log("res", res);
