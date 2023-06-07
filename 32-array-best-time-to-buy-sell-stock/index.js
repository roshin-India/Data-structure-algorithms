const A = [1, 4, 5, 2, 4];
function maxprofitOnstockArray(A) {
  let n = A.length;
  let maxprofit = 0;
  let max = A[n - 1];
  for (let i = n - 2; i >= 0; i--) {
    if (A[i] > max) {
      max = A[i];
    }
    let profit = max - A[i];
    if (profit > maxprofit) {
      maxprofit = profit;
    }
  }

  return maxprofit;
}
const res = maxprofitOnstockArray(A);
console.log(res);
