const A = [1, 1, 1, 4, 4, 4, 2];
function uniquefromThrice(A) {
  let ans = 0;
  for (let b = 0; b <= 30; b++) {
    let count = 0;
    for (let i = 0; i < A.length; i++) {
      if (A[i] & (1 << b)) {
        count++;
      }
    }
    console.log(`Bit position ${b}: Count = ${count}`);
    if (count % 3 != 0) {
      ans = ans | (1 << b);
    }
  }

  return ans;
}

let res = uniquefromThrice(A);
console.log("dfde", res);
