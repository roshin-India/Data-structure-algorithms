const A = 2200;
function leapyear(A) {
  if (A % 400 == 0 || (A % 4 == 0 && A % 100 != 0)) {
    return 1;
  }
  return 0;
}
const res = leapyear(A);
console.log("res", res);
