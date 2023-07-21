// const A = [1, 2, 1, 3, 4, 3];
const A = [31, 51, 31, 51, 31, 31, 31, 31, 31, 31, 51, 31, 31];
const B = 3;
function dnumWindow(A, B) {
  let dnummap = new Map();
  let res = [];
  let n = A.length;
  for (let i = 0; i < B; i++) {
    if (dnummap.has(A[i])) {
      dnummap.set(A[i], dnummap.get(A[i]) + 1);
    } else {
      dnummap.set(A[i], 1);
    }
  }
  res.push(dnummap.size);
  let s = 1;
  let e = B;

  while (e < n) {
    // let value = dnummap.get(A[s - 1]);
    // value -= 1;
    dnummap.set(A[s - 1], dnummap.get(A[s - 1]) - 1);

    if (dnummap.get(A[s - 1]) == 0) {
      dnummap.delete(A[s - 1]);
    }
    if (dnummap.has(A[e])) {
      // let value2 = dnummap.get(A[e]);
      // value2 -= 1;
      dnummap.set(A[e], dnummap.get(A[e]) + 1);
    } else {
      dnummap.set(A[e], 1);
    }
    res.push(dnummap.size);
    s = s + 1;
    e = e + 1;
  }
  return res;
}
let res = dnumWindow(A, B);
console.log("res", res);
