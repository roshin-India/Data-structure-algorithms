const A = [3, 30, 34, 5, 9];
function sortLargest(A) {
  A.sort((a, b) => {
    let str1 = a.toString() + b.toString();
    let str2 = b.toString() + a.toString();
    if (str1 > str2) {
      return -1;
    } else {
      return 1;
    }
  });
  let merged = A.join("");
  const ans = parseInt(merged, 10) < 1 ? "0" : merged;
  return ans;
}
res = sortLargest(A);
console.log("res", res);
