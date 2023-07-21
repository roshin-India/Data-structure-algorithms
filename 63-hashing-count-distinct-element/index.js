const A = [3, 3, 3, 9, 0, 1, 0];
function distinctelementnumberHashset(A) {
  let uniqset = new Set();
  let n = A.length;
  for (let i = 0; i < n; i++) {
    uniqset.add(A[i]);
  }
  return uniqset.size;
}

res = distinctelementnumberHashset(A);
console.log("res", res);
