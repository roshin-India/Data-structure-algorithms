const arr = [1, 2, 3, 4, 4];

function countOfElements(ar) {
  let max = ar[0];
  let count = 0;
  let n = ar.length;
  for (let i = 0; i < n; i++) {
    if (ar[i] > max) {
      max = ar[i];
    }
  }
  for (let i = 0; i < n; i++) {
    if (ar[i] == max) {
      count++;
    }
  }
  return n - count;
}

const res = countOfElements(arr);
console.log(res);
