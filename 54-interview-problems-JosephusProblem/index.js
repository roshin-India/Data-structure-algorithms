const A = 5;
function JosephusProblem(A) {
  for (let i = A; i >= 1; i--) {
    // If i is a power of 2
    if ((i & (i - 1)) == 0) {
      res = i;
      break;
    }
  }
  let kills = A - res;
  return 1 + 2 * kills;
}

res = JosephusProblem(A);
console.log("res", res);
