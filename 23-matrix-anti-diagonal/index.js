const A = [
  [1, 2, 3],
  [5, 6, 7],
  [9, 2, 3],
];
function matrixAntiDiagonalArray(A) {
  const N = A[0].length;
  let diagAntiArr = [];
  for (let j = 0; j < N; j++) {
    let r = 0;
    let c = j;
    let count1 = 0;
    let sub = new Array(N).fill(0);
    while (r < N && c >= 0) {
      sub[count1] = A[r][c];
      r++;
      c--;
      count1++;
    }
    diagAntiArr.push(sub);
  }
  for (let j = 1; j < N; j++) {
    let r = j;
    let c = N - 1;
    let count = 0;
    let newsub = new Array(N).fill(0);
    while (r < N && c >= 0) {
      newsub[count] = A[r][c];
      r++;
      c--;
      count++;
    }
    diagAntiArr.push(newsub);
  }

  return diagAntiArr;
}

const res = matrixAntiDiagonalArray(A);
console.log("---", res);
