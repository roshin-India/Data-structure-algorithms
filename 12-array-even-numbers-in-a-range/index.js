const A = [1, 2, 3, 4, 5];
const B = [
  [0, 2],
  [2, 4],
  [1, 4],
];
function evenNumInRangeArray(A, B) {
  let N = A.length;
  let evenArray = [];
  for (let i = 0; i < N; i++) {
    evenArray.push(A[i] % 2 == 0 ? 1 : 0);
  }
  let prefixSum = [];
  prefixSum[0] = evenArray[0];
  for (let i = 1; i < N; i++) {
    prefixSum[i] = prefixSum[i - 1] + evenArray[i];
  }

  //***OR***//
  // We can create pf sum in one loop
  // let prefixSum = []; //[ 0, 1, 1, 2, 2 ]
  // prefixSum[0] = A[0] % 2 === 0 ? 1 : 0;
  // for (let i = 1; i < N; i++) {
  //   prefixSum[i] = prefixSum[i - 1] + (A[i] % 2 === 0 ? 1 : 0);
  // }

  let count = [];
  for (let i = 0; i < B.length; i++) {
    let s = B[i][0];
    let e = B[i][1];
    let c = 0;
    if (s == 0) {
      c = prefixSum[e];
    } else {
      c = prefixSum[e] - prefixSum[s - 1];
    }
    count.push(c);
  }

  //O(N^2)
  // let count = [];
  // for (let i = 0; i < B.length; i++) {
  //   let s = B[i][0];
  //   let e = B[i][1];
  //   let c = 0;
  //   for (let j = s; j <= e; j++) {
  //     if (A[j] % 2 == 0) c++;
  //   }
  //   count.push(c);
  // }
  return count;
}

const res = evenNumInRangeArray(A, B);
console.log(res);
