const arr = [3, -3, 6, 8, 4, 7, 8, -2, 0];

function maxminArray(ar) {
  let max = ar[0];
  let min = ar[0];
  let n = ar.length;
  for (let i = 0; i < n; i++) {
    if (ar[i] > max) {
      max = ar[i];
    }
    if (ar[i] < min) {
      min = ar[i];
    }
  }
  const res = Number(max) + Number(min);
  return res;
}

const res = maxminArray(arr);
console.log(res);
