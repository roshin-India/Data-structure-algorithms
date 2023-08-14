const A = [1, 2, 3];
function sumSubarraysum(A) {
  let N = A.length;
  let totalsum = 0;
  for (let i = 0; i < A.length; i++) {
    //no.of subarrays in which ith index present
    let frequency = (i + 1) * (N - i);
    //contribution of each element
    let contr = A[i] * frequency;
    totalsum = totalsum + contr;
  }
  //OR

  //o(n^2)
  // let totalsum = 0;
  // for (let i = 0; i < A.length; i++) {
  //   let sum = 0;
  //   for (let j = i; j < A.length; j++) {
  //     sum = sum + Number(A[j]);
  //     totalsum = totalsum + sum;
  //   }
  // }
  return totalsum;
}

const res = sumSubarraysum(A);
console.log("---", res);
