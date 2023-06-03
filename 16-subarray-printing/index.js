A = [4, 2, 7];
function printAllSubarray(A) {
  const subarray = [];
  for (let i = 0; i < A.length; i++) {
    for (let j = i; j < A.length; j++) {
      const temp = [];
      for (let k = i; k <= j; k++) {
        temp.push(A[k]);
      }
      subarray.push(temp);
    }
  }
  return subarray;
}

const res = printAllSubarray(A);
console.log("---", res);
// A = [4, 2, 2];
// B = 0;
// C = 2;
// function printSubarray(A, B, C) {
//   const subarray = [];
//   for (let i = B; i <= C; i++) {
//     subarray.push(A[i]);
//   }
//   return subarray;
// }

// const res = printSubarray(A, B, C);
// console.log("---", res);
