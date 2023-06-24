const A = [6, 8, 9];
function sortFactor(A) {
  A.sort(function (a, b) {
    console.log("a", a);
    console.log("b", b);
    let x = countFact(a);
    let y = countFact(b);
    if (x < y) {
      return -1; //b - a;
    } else if (x > y) {
      return 1; //a - b;
    } else {
      if (a < b) {
        return -1; //b - a;
      } else {
        return 1; //a - b;
      }
    }
  });

  return A;
}
let res = sortFactor(A);
console.log("output:", res);

function countFact(num1) {
  let num = Number(num1);
  let count = 0;
  for (let i = 1; i * i <= num; i++) {
    if (num % i == 0) {
      if (i == num / i) {
        count = count + 1;
      } else {
        count = count + 2;
      }
    }
  }
  return count;
}
