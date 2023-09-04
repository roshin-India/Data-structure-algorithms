function subUnsort(A) {
  const x = [...A];
  x.sort((a, b) => a - b);
  let start = A.length;
  let end = 0;
  for (let i = 0; i < x.length; i++) {
      if (A[i] !== x[i]) {
          start = Math.min(start, i);
          end = Math.max(end, i);
      }
  }
  return end === 0 ? [-1] : [start, end];
}
// Example usage:
const A1 = [1, 3, 2, 4, 5];
const A2 = [1, 2, 3, 4, 5];

console.log(subUnsort(A1)); // Output 1