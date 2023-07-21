const A = [5, 10, 3, 2, 50, 80];
const B = 78;
function pairwithgivendiffHashing(A, B) {
  let set = new Set();
  let n = A.length;
  for (let i = 0; i < n; i++) {
    let pair1 = A[i] - B;
    let pair2 = A[i] + B;
    if (set.has(pair1) || set.has(pair2)) {
      return 1;
    }
    set.add(A[i]);
  }
  return 0;
}

res = pairwithgivendiffHashing(A, B);
console.log("res", res);
