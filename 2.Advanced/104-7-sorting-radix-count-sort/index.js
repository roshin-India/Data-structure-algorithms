function countSort(A) {
  let n = A.length;
  let max = Number(A[0]);
  for (let i = 0; i < n; i++) {
    if (A[i] > max) {
      max = A[i];
    }
  }

  let freq = Array(Number(max) + 1).fill(0);

  for (let i = 0; i < n; i++) {
    freq[A[i]] += 1;
  }
  let res = [];
  for (let i = 0; i <= max; i++) {
    for (let j = 1; j <= freq[i]; j++) {
      res.push(i);
    }
  }
  return res;
}
const A = [1, 3, 1];
console.log("res", countSort(A)); // Output 1
