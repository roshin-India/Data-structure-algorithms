const A = [4, 6, 1];
function elementRemoval(A) {
  A.sort((a, b) => b - a);
  let ans = 0;
  for (let i = 0; i < A.length; i++) {
    ans = ans + (i + 1) * A[i];
  }
  return ans;
}

const res = elementRemoval(A);
console.log(res);
