const A = 2;
const source = "1";
const destination = "3";
const helper = "2";
let res1 = [];
function ToH(A, source, destination, helper, res) {
  if (A == 1) {
    res.push(["1", source, destination]);
    return;
  }
  ToH(A - 1, source, helper, destination, res);
  res.push(["" + A, source, destination]);

  ToH(A - 1, helper, destination, source, res);
}

res = ToH(A, source, destination, helper, res1);
console.log("dfde", res1);
