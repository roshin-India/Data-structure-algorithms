const arr = [2, 5, 6];
const rotation = 2;
function rotateArray(ar, k) {
  const n = ar.length;
  const k1 = k % n;
  const revArr = reverseArray(ar, 0, n - 1);
  const revArr2 = reverseArray(revArr, 0, k1 - 1);
  const revArr3 = reverseArray(revArr2, k1, n - 1);
  return revArr3;
}
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

const res = rotateArray(arr, rotation);
console.log(res);
