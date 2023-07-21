// const A = [2, 5, 1];
// function birdWaiting(A) {
//   let ans = 0;
//   let sum = 0;
//   A.sort((a, b) => a - b);
//   console.log("", A);
//   for (let i = 1; i < A.length; i++) {
//     sum = sum + A[i - 1];
//     ans = ans + sum;
//   }
//   return ans; //% (10 ** 9 + 7);
// }
// res = birdWaiting(A);
// console.log("res", res);

// const A = [3, 5, 4, 7, 7];
// function productFind(A) {
//   let n = A.length;
//   let ans = 0;
//   for (let i = 1; i < n; i++) {
//     if (A[i] > A[i - 1]) {
//       if (ans == 0) {
//         ans = 1;
//       }
//       ans = ans * A[i];
//       ans = ans % (10 ** 9 + 7);
//     }
//   }
//   return ans;
// }
// res = productFind(A);
// console.log("res", res);

const A = 429;
const B = 3;
const C = 5;
function transformBits(A, B, C) {
  for (let i = B + 1; i <= C; i++) {
    let val = 1 << i;
    if ((A & val) > 0) {
      A = A - val;
    }
  }
  return A;
}
res = transformBits(A, B, C);
console.log("res", res);
