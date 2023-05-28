const A = [6, 3, 3, 6];
const B = [
  [0, 3],
  [0, 2],
];
function rangeSumQueryArray(A, B) {
  let res = [];
  for (let i = 0; i < B.length; i++) {
    const element = B[i];
    let sum = 0;
    for (let j = element[0]; j <= element[1]; j++) {
      sum = sum + A[j];
    }
    res.push(sum);
  }
  return res;
}

const res = rangeSumQueryArray(A, B);
console.log(res);
