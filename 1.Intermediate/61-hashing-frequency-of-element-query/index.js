const A = [6, 3, 3, 6, 7, 8, 7, 3, 7];
const B = [10, 9, 8];

function frequencyHashing(A, B) {
  const freqMap = new Map();
  let n = A.length;
  for (let i = 0; i < n; i++) {
    if (freqMap.has(A[i])) {
      freqMap.set(A[i], freqMap.get(A[i]) + 1);
    } else {
      freqMap.set(A[i], 1);
    }
  }
  console.log("sfdsgf", freqMap);
  const freqArr = [];
  for (let i = 0; i < B.length; i++) {
    if (freqMap.has(B[i])) {
      freqArr.push(freqMap.get(B[i]));
    } else {
      freqArr.push(0);
    }
  }
  return freqArr;
}

res = frequencyHashing(A, B);
console.log("res", res);
