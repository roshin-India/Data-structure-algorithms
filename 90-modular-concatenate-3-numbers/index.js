const A = 10;
const B = 20;
const C = 30;
function concatenate3num(A, B, C) {
  let newarr = [A, B, C].sort();
  return "" + newarr[0] + newarr[1] + newarr[2];
  // let str = "";
  // for (let i = 0; i < newarr.length; i++) {
  //   str = str + "hello" + newarr[i];
  // }
  // return str;
}
const res = concatenate3num(A, B, C);
console.log("res", res);
