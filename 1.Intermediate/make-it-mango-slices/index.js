function makeIt(A, B) {
  let totalslices = A * 3 + B;
  let maxshake = (totalslices - (totalslices % 2)) / 2;
  return maxshake;
}
const A = 17;
const B = 0;
const res = makeIt(A, B);
console.log("res", res);
