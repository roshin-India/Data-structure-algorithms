// const A = [
//   1000040, 1000459, 1000930, 1000040, 1000040, 1000301, 1000280, 1000106,
//   1000787, 1000040, 1000696, 1000378, 1000836, 1000040,
// ];
// const A = [1, 1, 1, 2, 3, 5, 7];
const A = [1];
function majorityOnethird(A) {
  let maj1 = 0; //Number(A[0]);
  let maj2 = 0; //Number(A[1]);
  let count1 = 1;
  let count2 = 1;
  if (A.length == 1) {
    return A[0];
  }
  for (i = 0; i < A.length; i++) {
    if (Number(A[i]) === maj1) {
      count1++;
    } else if (Number(A[i]) === maj2) {
      count2++;
    } else if (count1 === 0) {
      maj1 = Number(A[i]);
      count1 = 1;
    } else if (count2 === 0) {
      maj2 = Number(A[i]);
      count2 = 1;
    } else {
      count1--;
      count2--;
    }
  }
  console.log("rer", maj1);
  console.log("rer", maj2);
  let count3 = 0;
  let count4 = 0;
  for (i = 0; i < A.length; i++) {
    if (A[i] === maj1) {
      count3++;
    } else if (A[i] === maj2) {
      count4++;
    }
  }
  if (count3 > A.length / 3) return maj1;
  if (count4 > A.length / 3) return maj2;

  return -1;
}

const res = majorityOnethird(A);
console.log(res);
