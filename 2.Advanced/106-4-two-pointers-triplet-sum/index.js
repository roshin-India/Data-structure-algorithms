const A = [-1, 2, 1, -4];
const B = 1;
function tripletsum(A, B) {
  A.sort((a, b) => a - b);
  let n = A.length;
  let closestSum = Infinity;
  for (j = 0; j <= n - 3; j++) {
    let l = j + 1;
    let r = n - 1;
    while (l < r) {
      const Sum = A[j] + A[l] + A[r];
      if (Math.abs(Sum - B) < Math.abs(closestSum - B)) {
        closestSum = Sum;
      }
      if (Sum < B) {
        l++;
      } else {
        r--;
      }
    }
  }
  return closestSum;
}

const res = tripletsum(A, B);
console.log("res", res);
