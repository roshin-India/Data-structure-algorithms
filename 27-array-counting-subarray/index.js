const A = [1, 2, 3, 4, 5];
const B = 4;

function countSubarray(A, B) {
  let N = A.length;
  let count = 0;
  for (let i = 0; i < N; i++) {
    let sum = 0;
    for (let j = i; j < N; j++) {
      sum = sum + Number(A[j]);
      if (sum < B) count++;
    }
  }
  return count;
}
const res = countSubarray(A, B);
console.log(res);
