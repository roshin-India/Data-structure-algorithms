const A = 5;
const B = 0;
function setBit(A, B) {
  if ((A & (2 ** B)) == 2 ** B) {
    return 1;
  } else {
    return 0;
  }
}
const res = setBit(A, B);
console.log(res);
