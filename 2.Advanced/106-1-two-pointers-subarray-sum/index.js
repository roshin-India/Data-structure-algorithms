const A = [5, 10, 20, 100, 105];
const B = 110;
function subarraysum(A, B) {
  let i = 0;
  let j = 0;
  let n = A.length;
  let sum = A[0];
  while (j < n) {
    if (sum == B) {
      return A.slice(i, j + 1);
    } else if (sum < B) {
      j++;
      if (j == n) break;
      sum = sum + A[j];
    } else {
      sum = sum - A[i];
      i++;
    }
  }
  return [-1];
}

const res = subarraysum(A, B);
console.log("res", res);
