function decToBase(A, B) {
  let newnumber = "";
  if (A == 0) {
    return 0;
  }
  while (A > 0) {
    let rem = A % B;
    newnumber = rem + newnumber;
    A = Math.floor(A / B);
  }
  return newnumber;
}

const res = decToBase(1010, 2);
console.log(res);
