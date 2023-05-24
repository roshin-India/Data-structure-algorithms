const arr = [1, 2, 3, 4];
function goodPair(ar) {
  let n = ar.length;
  let k = 7;
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      //console.log(ar[i] + ar[j] == k);
      if (ar[i] + ar[j] == k) {
        return 1;
      }
    }
  }
  return 0;
}

const res = goodPair(arr);
console.log(res);
