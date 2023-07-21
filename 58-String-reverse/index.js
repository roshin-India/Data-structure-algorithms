const A = "academy";
function stringReverse(A) {
  let B = A.split("");
  console.log("dfs", B);
  let p1 = 0;
  let p2 = B.length - 1;
  while (p1 < p2) {
    let temp = B[p1];
    B[p1] = B[p2];
    B[p2] = temp;
    p1++;
    p2--;
  }
  return B.join("");
}

res = stringReverse(A);
console.log("res", res);
