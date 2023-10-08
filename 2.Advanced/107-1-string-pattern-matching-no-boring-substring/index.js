/**
 * IDEA: as consecutive characters are not allowed in length of 2, eg ab, lm, no, st, etc..
 * So, we will divide characters in even and odd group by their char code,
 * then we'll sort the odd and even group,
 * then we'll check if even group's last character is not consecutive with the odd group's first character OR
 * odd group's last character is not consecutive with even group's first character, it means we can rearrange the string
 * in a way where boring string doesn't exists.
 * If both of the cases are not true, it means there always exists consecutive characters in the substring which cannot be rearranged,
 * so we will return 0
 */
const A = "abcd";
function noBoringSubString() {
  let oddChar = "";
  let evenChar = "";

  // dividing string into odd and even group
  for (let i = 0; i < A.length; i++) {
    if (A[i].charCodeAt() % 2 == 0) {
      evenChar += A[i];
    } else {
      oddChar += A[i];
    }
  }

  // sorting odd and even group
  oddChar = oddChar.split("").sort().join("");
  evenChar = evenChar.split("").sort().join("");

  // checking if evenChar last character and oddChar first character is consecutive or not
  if (
    Math.abs(
      evenChar[evenChar.length - 1].charCodeAt() - oddChar[0].charCodeAt()
    ) != 1
  ) {
    return 1;
  }

  // checking if oddChar last character and evenChar first character is consecutive or not
  if (
    Math.abs(
      oddChar[oddChar.length - 1].charCodeAt() - evenChar[0].charCodeAt()
    ) != 1
  ) {
    return 1;
  }

  return 0;
}
const res = noBoringSubString(A);
console.log("res", res);
