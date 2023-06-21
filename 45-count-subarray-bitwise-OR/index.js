const A = 7;
const B = [1, 0, 0, 0, 1, 0, 0];
function subarrayBitwiseORcount(A, B) {
  let count = 0;
  let zerocount = 0;
  for (i = 0; i < A; i++) {
    if (B[i] == 0) {
      zerocount++;
    } else {
      count = count + (zerocount * (zerocount + 1)) / 2;
      zerocount = 0;
    }
  }
  count = count + (zerocount * (zerocount + 1)) / 2;
  return (A * (A + 1)) / 2 - count;
}

const res = subarrayBitwiseORcount(A, B);
console.log(res);
