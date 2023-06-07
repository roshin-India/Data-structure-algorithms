const A = [
  52, 7, 93, 47, 68, 26, 51, 44, 5, 41, 88, 19, 78, 38, 17, 13, 24, 74, 92, 5,
  84, 27, 48, 49, 37, 59, 3, 56, 79, 26, 55, 60, 16, 83, 63, 40, 55, 9, 96, 29,
  7, 22, 27, 74, 78, 38, 11, 65, 29, 52, 36, 21, 94, 46, 52, 47, 87, 33, 87, 70,
]; //[1, 12, 10, 3, 14, 10, 5];
const B = 19; //8;
function minSwap(A, B) {
  let n = A.length;
  let s = 0;
  let minCount = 0;
  for (let i = 0; i < n; i++) {
    if (A[i] <= B) {
      minCount++;
    }
  }
  if (minCount == 0 || minCount == 1) {
    return 0;
  }
  let bad = 0;
  for (let i = s; i < minCount; i++) {
    if (A[i] > B) {
      bad++;
    }
  }
  s++;
  let e = minCount;
  let ans = bad;
  while (e < n) {
    if (A[s - 1] > B) bad--;
    if (A[e] > B) bad++;
    if (bad < ans) {
      ans = bad;
    }
    s++;
    e++;
  }
  return ans;
}
const res = minSwap(A, B);
console.log(res);
