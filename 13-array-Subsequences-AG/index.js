A = "GABGAG";

function subsequenceAGArray(A) {
  let c = 0;
  let count = 0;
  let N = A.length;
  for (let i = N - 1; i >= 0; i--) {
    if (A[i] == "G") {
      c++;
    } else if (A[i] == "A") {
      count = count + c;
    }
  }

  return count % 1000000007;
}

const res = subsequenceAGArray(A);
console.log(res);
