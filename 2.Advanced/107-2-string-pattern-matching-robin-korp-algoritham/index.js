function countOccurrencesRabinKarp(A, B) {
  let result = 0;
  let bHashValue = 0;
  let aHashValue = 0;
  let pValue = 1;
  let lastValue = 0;

  for (let i = B.length - 1; i >= 0; i--) {
    bHashValue += (B.charCodeAt(i) - "a".charCodeAt(0)) * pValue;
    aHashValue += (A.charCodeAt(i) - "a".charCodeAt(0)) * pValue;
    lastValue = pValue;
    pValue *= 29;
  }

  if (bHashValue === aHashValue) {
    result++;
  }

  for (let i = B.length; i < A.length; i++) {
    aHashValue =
      (aHashValue -
        (A.charCodeAt(i - B.length) - "a".charCodeAt(0)) * lastValue) *
        29 +
      (A.charCodeAt(i) - "a".charCodeAt(0));
    if (aHashValue === bHashValue) {
      result++;
    }
  }

  return result;
}

// Example usage:
const A1 = "acbac";
const B1 = "ac";
console.log(countOccurrencesRabinKarp(A1, B1)); // Output: 2

const A2 = "aaaa";
const B2 = "aa";
console.log(countOccurrencesRabinKarp(A2, B2)); // Output: 3
