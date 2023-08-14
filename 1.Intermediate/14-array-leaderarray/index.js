A = A = [10, 7, 9, 3, 2, 4];
function leaderArray(A) {
  let N = A.length;
  let count = 1;
  let max = A[N - 1];
  let leadarr = [max];
  for (let i = N - 2; i >= 0; i--) {
    if (A[i] > max) {
      count++;
      max = A[i];
      leadarr.push(max);
    }
  }
  return leadarr;
}

const res = leaderArray(A);
console.log(res);
