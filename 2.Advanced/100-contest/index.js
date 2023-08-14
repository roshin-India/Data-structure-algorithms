// function mergeIntervals(A) {
//   let ans = A[0];
//   let sum = 0;
//   let n = A.length;
//   for (let i = 0; i < n; i++) {
//     sum += A[i];
//     ans = Math.max(ans, sum);
//     console.log("dd", ans);
//     if (sum < 0) {
//       sum = 0;
//     }
//   }
//   return ans;
// }

// const res = mergeIntervals([-2, 1, -3, 4, -1, 2, 1, -5, 4]);
// console.log(res); // Output: 16
// function countBitDifferences(num1, num2) {
//   let xorResult = num1 ^ num2;
//   let count = 0;

//   while (xorResult > 0) {
//     if (xorResult & 1) {
//       count++;
//     }
//     xorResult >>= 1;
//   }

//   return count;
// }

// function totalBitDifferences(arr) {
//   let total = 0;
//   const n = arr.length;

//   for (let i = 0; i < n; i++) {
//     for (let j = i + 1; j < n; j++) {
//       total += countBitDifferences(arr[i], arr[j]);
//       // total %= 1000000007;
//     }
//   }

//   return total;
// }

// const result = totalBitDifferences([1, 4, 3]);
// console.log("result", result);

// function totalBitDifferences(arr) {
//   const n = arr.length;
//   let total = 0;

//   for (let i = 0; i < 32; i++) {
//     let countSetBits = 0;
//     for (let j = 0; j < n; j++) {
//       if ((arr[j] & (1 << i)) !== 0) {
//         countSetBits++;
//       }
//     }
//     total += countSetBits * (n - countSetBits);
//   }

//   return total;
// }

// const A = [17, 4, 12, 10, 5];
// const result = totalBitDifferences(A);
// console.log("ff", result);
function canAchieveIncreasingScore(A) {
  let removedCount = 0;
  let prevScore = -1;

  for (let i = 0; i < A.length; i++) {
    if (A[i] <= prevScore) {
      removedCount++;
      if (removedCount > 1) {
        return false;
      }
      // if (i === 1 || A[i] > A[i - 2]) {
      //   prevScore = A[i];
      // } else {
      //   prevScore = A[i - 1];
      // }
    } else {
      prevScore = A[i];
    }
  }

  return true;
}

const input = [1, 2, 3];
const result = canAchieveIncreasingScore(input);
console.log(result);
