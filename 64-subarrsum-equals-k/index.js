// const A = [13, 9, 19, -9, -19, 14, -15];
const A = [1, 0, 1];
const B = 1;
function subarrsumequals(A, B) {
  let count = 0; // Counter for subarrays with sum equals to B
  let sum = 0; // Running sum of elements
  const sumMap = new Map(); // Map to store prefix sums and their counts

  sumMap.set(0, 1); // Initial sum of 0 with count 1 (needed for subarrays starting at index 0)

  // Iterate through the array
  for (let i = 0; i < A.length; i++) {
    sum += A[i]; // Add current element to the running sum

    // If there is a previous prefix sum that makes (sum - B), add its count to the total
    if (sumMap.has(sum - B)) {
      count += sumMap.get(sum - B);
    }

    // Increment the count for the current prefix sum in the map
    if (sumMap.has(sum)) {
      sumMap.set(sum, sumMap.get(sum) + 1);
    } else {
      sumMap.set(sum, 1);
    }
  }

  return count;
}
function subarrsumequalsK(A, B) {
  let sumMap = new Map();
  let n = A.length;
  for (let i = 0; i < n; i++) {
    let sum = 0;
    for (let j = i; j < n; j++) {
      sum = sum + A[j];
      if (sumMap.has(sum)) {
        sumMap.set(sum, sumMap.get(sum) + 1);
      } else {
        sumMap.set(sum, 1);
      }
    }
  }
  console.log("gg", sumMap);
  return !!sumMap.get(B) ? sumMap.get(B) : 0;
}

res = subarrsumequals(A, B);
console.log("res", res);
