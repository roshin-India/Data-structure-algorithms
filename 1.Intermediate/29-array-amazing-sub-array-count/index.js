const A = "ABEC";
function amazingSubArrayCount(A) {
  let count = 0;
  let sum = 0;

  for (let i = A.length - 1; i >= 0; i--) {
    count++;
    if (
      A[i] == "a" ||
      A[i] == "e" ||
      A[i] == "i" ||
      A[i] == "o" ||
      A[i] == "u" ||
      A[i] == "A" ||
      A[i] == "E" ||
      A[i] == "O" ||
      A[i] == "I" ||
      A[i] == "U"
    ) {
      sum += count;
    }
  }

  return sum % 10003;
  //OR

  //O(N^2)
  // let N = A.length;
  // let count = 0;
  // for (let i = 0; i < N; i++) {
  //   for (let j = i; j < N; j++) {
  //     if (
  //       A[i] == "a" ||
  //       A[i] == "e" ||
  //       A[i] == "i" ||
  //       A[i] == "o" ||
  //       A[i] == "u" ||
  //       A[i] == "A" ||
  //       A[i] == "E" ||
  //       A[i] == "O" ||
  //       A[i] == "I" ||
  //       A[i] == "U"
  //     ) {
  //       count++;
  //     }
  //   }
  // }
  // return count % 10003;
}
const res = amazingSubArrayCount(A);
console.log(res);
