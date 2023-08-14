const A1 = "qwertyuikjhgfdsazxcvbnm";
function aToZPuzzle(A) {
  let newA = A.split("");
  let newSet = new Set();
  for (let i = 0; i < newA.length; i++) {
    newSet.add(newA[i].charCodeAt());
  }
  if (newSet.size == 26) {
    return 1;
  } else {
    return 0;
  }
}
res = aToZPuzzle(A1);
console.log("res", res);

const A = "hello world";
const B = "o";
function reverseStarToOccurence(A, B) {
  let newA = A.split("");
  let e = 0;
  for (let i = 0; i < newA.length; i++) {
    if (B == newA[i]) {
      e = i;
      break;
    }
  }
  return stringReverse(A, 0, e);
}
function stringReverse(A, s, e) {
  let stringArr = A.split("");
  let p1 = s;
  let p2 = e;
  while (p1 < p2) {
    let temp = stringArr[p1];
    stringArr[p1] = stringArr[p2];
    stringArr[p2] = temp;
    p1++;
    p2--;
  }
  return stringArr.join("");
}
// res = reverseStarToOccurence(A, B);
// console.log("res", res);
