const A = [
  -251, -305, -323, -53, -215, -143, -107, -161, -179, -431, -449, -17, -341,
  -413, -35, -125, -197, -377, -269, -71, -359, -89, -233, -287, -395,
];
function sortBasedAP(A) {
  A.sort((a, b) => a - b);
  if (A.length == 1) {
    return 1;
  }
  console.log("dd", A);
  let d = A[1] - A[0];
  for (let i = 1; i < A.length - 1; i++) {
    if (A[i + 1] - A[i] != d) {
      return 0;
    }
  }
  return 1;
}
res = sortBasedAP(A);
console.log("res", res);
