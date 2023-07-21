const A = "16";
function divisibleby8(A) {
  return Number(BigInt(A) % BigInt(8) == 0n) || 0;
}
const res = divisibleby8(A);
console.log("res", res);
