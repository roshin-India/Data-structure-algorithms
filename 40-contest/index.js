// let A = [1, 101, 201, 3];
// let B = [
//   [1, 2],
//   [1, 4],
// ];
let A = [100, 11, 21, 1];
let B = [
  [2, 4],
  [1, 3],
];
function test2(A, B) {
  let pf = [];
  pf[0] = A[0] > 10 ? 1 : 0;
  for (let i = 1; i < A.length; i++) {
    pf[i] = pf[i - 1];
    if (A[i] > 10) {
      pf[i] = pf[i] + 1;
    }
  }
  let ans = [];
  for (let k = 1; k <= B.length; k++) {
    let L = B[k - 1][0];
    let R = B[k - 1][1];
    if (L == 1) {
      ans.push(pf[R - 1]);
    } else {
      ans.push(pf[R - 1] - pf[L - 2]);
    }
  }
  return ans;
}

// const A = "110101";
// function test(A) {
//   let newArr = A.split("");
//   let count = 0;
//   let ans = 0;
//   for (let i = 0; i < newArr.length; i++) {
//     if (newArr[i] == 1) {
//       count++;
//       if (ans < count) {
//         ans = count;
//       }
//     } else {
//       count = 0;
//     }
//   }
//   return ans;
// }

const res = test2(A, B);
console.log(res);
