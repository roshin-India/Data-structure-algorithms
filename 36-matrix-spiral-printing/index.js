const A = 4;
function spiralMatrix(A) {
  const r = A;
  let c = A;
  let arr = new Array(r);
  for (let i = 0; i < r; i++) {
    arr[i] = new Array(c);
  }

  let i = 0;
  let j = 0;
  let size = A;
  let count = 1;
  while (size > 1) {
    for (let k = 1; k < size; k++) {
      arr[i][j] = count;
      j++;
      count++;
    }
    for (let k = 1; k < size; k++) {
      arr[i][j] = count;
      count++;
      i++;
    }
    for (let k = 1; k < size; k++) {
      arr[i][j] = count;
      count++;
      j--;
    }
    for (let k = 1; k < size; k++) {
      arr[i][j] = count;
      count++;
      i--;
    }
    i++;
    j++;
    size = size - 2;
  }
  if (size == 1) {
    arr[i][j] = count;
  }
  return arr;
}
const res = spiralMatrix(A);
console.log(res);
