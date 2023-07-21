let A = 3;
function reverse32bit(A) {
  A = Number(A);
  const res = convertToBinary(A).split("").reverse();
  let n = res.length;
  let sum = 0;
  for (let i = 0; i < n; i++) {
    if (res[i] == 1) {
      let val = 31 - i;
      sum = sum + 2 ** val;
    }
  }
  return sum;
}

res = reverse32bit(A);
console.log("res", res);
function convertToBinary(A) {
  let bin = "";
  while (A > 0) {
    rem = A % 2;
    bin = rem + bin;
    A = Math.floor(A / 2);
  }
  return bin;
}
