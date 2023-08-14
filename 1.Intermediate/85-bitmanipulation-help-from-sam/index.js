let A = 4;
function helpFromSam(A) {
  A = Number(A);
  if (A == 0) return 0;
  let count = 0;
  let res = convertBinary(A);
  let n = res.split("").length;
  for (let i = 0; i < n; i++) {
    if ((A & (1 << i)) == 1 << i) {
      count++;
    }
  }
  return count;
}

res = helpFromSam(A);
console.log("res", res);
function convertBinary(A) {
  let binary = "";
  while (A > 0) {
    let rem = A % 2;
    binary = rem + binary;
    A = Math.floor(A / 2);
  }
  return binary;
}
