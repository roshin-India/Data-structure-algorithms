const A = [2, 24, 22, 19];
function sortTensDigit(A) {
  A.sort(function (a, b) {
    let x = findtensdigit(a);
    let y = findtensdigit(b);
    if (x < y) {
      return -1;
    } else if (x > y) {
      return 1;
    } else if (x == y) {
      if (a < b) {
        return 1;
      } else {
        return -1;
      }
    }
  });
  return A;
}
res = sortTensDigit(A);
console.log("res", res);

function findtensdigit(a) {
  let t = Math.floor((Number(a) / 10) % 10);
  return t;
}
