const A = 1;
const B = 1;
function XORsum(A, B) {
  let res = (A ^ (A & B)) + (B ^ (A & B));
  return res;
}

const res = XORsum(A, B);
console.log(res);
