A = 5;
B = 1;
C = [2, 2, 2];
function Subarraymaxsum(A, B, C) {
  let max = 0;
  for (let i = 0; i < A; i++) {
    let sum = 0;
    if (sum <= max) {
      for (let j = i; j < A; j++) {
        sum = sum + Number(C[j]);
        if (sum <= B && max <= sum) {
          max = sum;
        }
      }
    } else {
      return 0;
    }
  }
  return max;
}

const res = Subarraymaxsum(A, B, C);
console.log("---", res);
