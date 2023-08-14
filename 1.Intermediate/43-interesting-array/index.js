const A = [9, 17];
function mergeSplitArray(A) {
  let count = 0;
  let n = A.length;
  for (let i = 0; i < n; i++) {
    if (A[i] % 2 != 0) {
      count++;
    }
  }
  if (count % 2 != 0) {
    return "No";
  } else {
    return "Yes";
  }
}

const res = mergeSplitArray(A);
console.log(res);
