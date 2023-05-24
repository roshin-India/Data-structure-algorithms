const arr = [1, 2, 3, 4, 5];

function reverseArray(ar) {
  let n = ar.length;
  let p1 = 0;
  let p2 = n - 1;

  while (p1 < p2) {
    let temp = ar[p1];
    ar[p1] = ar[p2];
    ar[p2] = temp;
    p1++;
    p2--;
  }
  return ar;
}

const res = reverseArray(arr);
console.log(res);
