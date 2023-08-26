const A = [3, 7, 9];
const B = [2, 10, 19];
function merge(A, B) {
  let n = A.length;
  let m = B.length;
  let i = 0;
  let j = 0;
  let C = [];
  for (let k = 0; k <= m + n - 1; k++) {
    if (i == n) {
      C[k] = B[j];
      j++;
    } else if (j == m) {
      C[k] = A[i];
      i++;
    } else if (A[i] <= B[j]) {
      C[k] = A[i];
      i++;
    } else {
      C[k] = B[j];
      j++;
    }
  }
  return C;
}
let res = merge(A, B);
console.log("res", res);

// function merge(A, B) {
//   let n = A.length;
//   let m = B.length;
//   let i = 0;
//   let j = 0;
//   let C = [];

//   while (i < n && j < m) {
//     if (A[i] <= B[j]) {
//       C.push(A[i]);
//       i++;
//     } else {
//       C.push(B[j]);
//       j++;
//     }
//   }

//   while (i < n) {
//     C.push(A[i]);
//     i++;
//   }

//   while (j < m) {
//     C.push(B[j]);
//     j++;
//   }

//   return C;
// }

// function mergeSort(D) {
//   let n = D.length;
//   if (n <= 1) {
//     return D;
//   }

//   let mid = Math.floor(n / 2);
//   let left = D.slice(0, mid);
//   let right = D.slice(mid);

//   let A = mergeSort(left);
//   let B = mergeSort(right);

//   return merge(A, B);
// }

// const D = [9, 8, 7, 3, 6, 4, 1, 5, 0, 10];
// let res = mergeSort(D);
// console.log(res);
