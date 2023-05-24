const arr = [1, 2, 3, 4, 5];
const start = 2;
const end = 4;
function reverseArray(ar, s, e) {
  let p1 = s;
  let p2 = e;

  while (p1 < p2) {
    let temp = ar[p1];
    ar[p1] = ar[p2];
    ar[p2] = temp;
    p1++;
    p2--;
  }
  return ar;
}

const res = reverseArray(arr, start, end);
console.log(res);
