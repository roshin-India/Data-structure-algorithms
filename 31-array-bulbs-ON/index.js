const A = [0, 1, 1, 0];
function bulbOnArray(A) {
  let n = A.length;
  let count = 0;
  for (let i = 0; i < n; i++) {
    let state = A[i];
    console.log("count", count, state);
    if (count % 2 == 0) {
      state = A[i];
    } else {
      state = 1 - A[i];
    }
    if (state == 0) {
      count++;
    }
    console.log("count==", count, state);
  }
  return count;
}
const res = bulbOnArray(A);
console.log(res);
