let A = [3, 7, 90, 20, 10, 50, 40];
let B = 3;
function subarrleastAvrg(A, B) {
  let n = A.length;
  let sum = 0;
  let min_avg = 0;
  let index = 0;
  for (let i = 0; i < B; i++) {
    sum = sum + A[i];
    min_avg = sum / B;
  }
  let s = 1;
  let e = B;
  while (e < n) {
    sum = sum - A[s - 1] + A[e];
    let avg = sum / B;
    if (avg < min_avg) {
      min_avg = avg;
      index = s;
    }
    s++;
    e++;
  }
  return index;
}
let res = subarrleastAvrg(A, B);
console.log("res", res);
