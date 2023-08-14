const A = "aeiOUz";
function stringHashReplace(A) {
  let strArr = [];
  for (let i = 0; i < A.length; i++) {
    if (!(A[i].charCodeAt() >= 65 && A[i].charCodeAt() <= 90)) {
      if (
        A[i] == "a" ||
        A[i] == "e" ||
        A[i] == "i" ||
        A[i] == "o" ||
        A[i] == "u"
      ) {
        strArr.push("#");
      } else {
        strArr.push(A[i]);
      }
    }
  }
  let newStr = strArr.join("") + strArr.join("");
  return newStr; //.replace(/[aeiou]/gi, "#");
}

res = stringHashReplace(A);
console.log("res", res);
