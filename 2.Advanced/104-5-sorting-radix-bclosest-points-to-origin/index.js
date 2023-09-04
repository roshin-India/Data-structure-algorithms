function BClosestPoint(A, B) {
  A.sort((a, b) => {
    const d1 = a[0] * a[0] + a[1] * a[1];
    const d2 = b[0] * b[0] + b[1] * b[1];
    return d1 - d2;
  });

  const ans = [];
  for (let i = 0; i < B; i++) {
    ans.push([A[i][0], A[i][1]]);
  }
  return ans;
}
A = [
  [1, 3],
  [-2, 2],
];
B = 1;

console.log("res", BClosestPoint(A, B)); // Output 1
