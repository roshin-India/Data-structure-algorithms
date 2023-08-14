function countOfPrime(A) {
  let totalCount = 0;
  for (let i = 1; i <= A; i++) {
    let factorCount = 0;
    for (let j = 1; j <= i; j++) {
      if (i % j == 0) {
        factorCount++;
      }
    }
    if (factorCount == 2) {
      totalCount++;
    }
  }
  return totalCount;
}
const res = countOfPrime(4);
console.log("res", res);
