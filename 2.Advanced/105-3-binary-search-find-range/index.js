const A = [
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3,
  3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4,
  4, 4, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6,
  6, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 8, 8, 8, 8, 8,
  8, 8, 8, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 10, 10, 10, 10, 10, 10, 10, 10, 10,
  10, 10, 10, 10, 10, 10, 10,
];
const B = 10;
function findRange2(A, B) {
  let ans = [-1, -1];
  ans[0] = findRange(true, A, B);
  ans[1] = findRange(false, A, B);
  return ans;
}

function findRange(findFirstOccurence, A, B) {
  let n = A.length;
  let l = 0;
  let r = n - 1;
  let res = [];
  let idx = -1;
  while (l <= r) {
    let mid = Math.floor((l + r) / 2);
    if (A[mid] == B) {
      idx = mid;
      if (findFirstOccurence) {
        r = mid - 1;
      } else {
        l = mid + 1;
      }
    } else if (A[mid] < B) {
      l = mid + 1;
    } else {
      r = mid - 1;
    }
  }
  console.log("nhn", idx);
  return idx;
}

const res = findRange2(A, B);
console.log("res", res);
