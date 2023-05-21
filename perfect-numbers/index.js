function perfectnumber(A) {
  let sum = 0;
  for (let i = 1; i < A; i++) {
    if (A % i == 0) {
      sum = sum + i;
    }
  }
  if (sum == A) {
    return 1;
  } else {
    return 0;
  }
}
const res = perfectnumber(100);
console.log("res", res);
