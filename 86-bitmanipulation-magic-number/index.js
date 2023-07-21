let A = 6;
function magicNum(A) {
  let i = 5;
  let res = 0;
  while (A) {
    if (A & 1) {
      res += i;
    }
    i *= 5;
    A = A >> 1;
  }
  return res;
}

res = magicNum(A);
console.log("res", res);
