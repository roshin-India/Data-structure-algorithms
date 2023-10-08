const A = [1, 1, 1];
const B = 2;
function pairwithSum(A, B) {
  let mod = 1000000007;
  let N = A.length;
  let p1 = 0;
  let p2 = N - 1;
  let count = 0;
  while (p1 < p2) {
    if (A[p1] + A[p2] > B) {
      p2--;
    } else if (A[p1] + A[p2] < B) {
      p1++;
    } else {
      if (A[p1] == A[p2]) {
        // Since array is sorted and if we came to a point where A[p1] == A[p2]
        // then all the remaining elements are equal only
        // So we are breakig after calculating no of pairs
        // Ex 1 2 2 2 2 4 5 all 2 are equal
        // Note:- ((repeat) * (repeat -1) /2) is Repeat C 2 all pairs combination
        let repeat = p2 - p1 + 1;
        count += ((repeat * (repeat - 1)) / 2) % mod;
        break;
      } else {
        // if they are not equal we just find out how many times p1 and p2
        // elements are repeating and add all pairs fromed by them
        let p1Repeat = 1;
        let p2Repeat = 1;
        while (p1 < p2 && A[p1] == A[p1 + 1]) {
          p1++;
          p1Repeat++;
        }
        while (p1 < p2 && A[p2] == A[p2 - 1]) {
          p2--;
          p2Repeat++;
        }
        count += (p1Repeat * p2Repeat) % mod;
        p1++;
        p2--;
      }
    }
  }
  return count % mod;
}

const res = pairwithSum(A, B);
console.log("res", res);
