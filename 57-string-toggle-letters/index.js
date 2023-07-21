const A = "FbxdWdoKwrezJPP";
function toggleletterString(A) {
  let newA = A.split("");
  let n = newA.length;
  for (let i = 0; i < n; i++) {
    if (newA[i].charCodeAt() >= 65 && newA[i].charCodeAt() <= 90) {
      newA[i] = String.fromCharCode(newA[i].charCodeAt() + 32);
    } else {
      newA[i] = String.fromCharCode(newA[i].charCodeAt() - 32);
    }
  }
  return newA.join("");
}

res = toggleletterString(A);
console.log("res", res);
