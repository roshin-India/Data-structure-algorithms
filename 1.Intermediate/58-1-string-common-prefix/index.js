const A = ["abcd", "abde", "abcf"];
function stringCommonPrefix(A) {
  let minstr = A[0];
  let min = A[0].length;
  for (let i = 1; i < A.length; i++) {
    if (A[i].length < min) {
      min = A[i].length;
      minstr = A[i];
    }
  }
  let isbool = true;
  let ans = "";
  for (let i = 0; i < min; i++) {
    let ch = minstr[i];
    for (let j = 0; j < A.length; j++) {
      if (ch != A[j][i]) {
        isbool = false;
        break;
      }
    }
    if (isbool) {
      ans = ans + ch;
    } else {
      return ans;
    }
  }
  return ans;
}

res = stringCommonPrefix(A);
console.log("res", res);
