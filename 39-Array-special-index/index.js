const A = [2, 1, 6, 4];
function specialIndex(A) {
  const pfe = prefix(A);
  const pfo = prefix(A, "Odd");
  let n = A.length;
  let count = 0;
  for (let i = 0; i < A.length; i++) {
    if (i == 0) {
      let SE = pfe[n - 1] - pfe[i];
      let SO = pfo[n - 1] - pfo[i];
      if (SE == SO) {
        count++;
      }
    } else {
      let SE = pfe[i - 1] + (pfo[n - 1] - pfo[i]);
      let SO = pfo[i - 1] + (pfe[n - 1] - pfe[i]);
      if (SE == SO) {
        count++;
      }
    }
  }
  return count;
}
function prefix(A, mode = "Even") {
  let pf = [];
  pf[0] = mode == "Even" ? A[0] : 0;

  for (let i = 1; i < A.length; i++) {
    if (mode == "Even") {
      if (i % 2 == 0) {
        pf[i] = pf[i - 1] + A[i];
      } else {
        pf[i] = pf[i - 1];
      }
    } else {
      if (i % 2 != 0) {
        pf[i] = pf[i - 1] + A[i];
      } else {
        pf[i] = pf[i - 1];
      }
    }
  }
  return pf;
}

const res = specialIndex(A);
console.log(res);
