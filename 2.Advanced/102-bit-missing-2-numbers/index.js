const A = [
  31, 4, 274, 25, 80, 273, 111, 205, 207, 91, 154, 3, 86, 231, 113, 161, 65,
  275, 240, 30, 105, 193, 178, 103, 138, 222, 219, 155, 279, 115, 120, 60, 237,
  45, 174, 19, 277, 181, 133, 278, 108, 123, 157, 270, 218, 51, 75, 262, 267, 6,
  126, 211, 106, 49, 127, 34, 148, 253, 224, 124, 192, 225, 152, 276, 182, 184,
  52, 183, 190, 16, 268, 62, 17, 1, 20, 136, 264, 98, 70, 256, 234, 132, 9, 137,
  67, 146, 165, 215, 172, 35, 58, 131, 107, 125, 191, 94, 200, 11, 78, 85, 145,
  228, 180, 201, 150, 143, 230, 64, 28, 269, 93, 156, 128, 14, 196, 96, 206, 24,
  116, 66, 87, 250, 199, 56, 36, 212, 272, 57, 81, 185, 88, 84, 8, 188, 164,
  202, 247, 50, 169, 79, 249, 186, 147, 95, 194, 244, 41, 10, 214, 258, 7, 197,
  102, 210, 203, 53, 167, 245, 187, 166, 54, 42, 117, 223, 122, 61, 221, 101,
  100, 130, 90, 160, 27, 71, 38, 204, 266, 229, 119, 39, 12, 89, 144, 114, 241,
  255, 227, 217, 26, 83, 265, 259, 243, 69, 168, 162, 63, 82, 97, 171, 139, 158,
  198, 232, 13, 209, 235, 208, 239, 213, 134, 32, 77, 151, 163, 37, 5, 242, 72,
  226, 173, 76, 99, 112, 170, 92, 22, 33, 118, 195, 177, 48, 252, 140, 121, 129,
  159, 110, 179, 15, 251, 153, 46, 175, 104, 40, 246, 220, 23, 18, 74, 254, 47,
  189, 59, 21, 109, 44, 260, 176, 216, 261, 142, 149, 73, 233, 263, 68, 43, 236,
  248, 257, 29, 2, 271, 238, 135,
];
function missingNumber2(A) {
  let a = 0;
  let n = A.length;
  for (let i = 0; i < n; i++) {
    a = a ^ A[i];
  }
  for (let i = 1; i <= n + 2; i++) {
    a = a ^ i;
  }
  let b = -1;
  for (let i = 0; i <= 30; i++) {
    if ((a >> i) & 1) {
      b = i;
      break;
    }
  }
  console.log("b", b);
  let x = 0;
  let y = 0;
  for (let i = 0; i < n; i++) {
    if (((A[i] >> b) & 1) == 1) {
      x = x ^ A[i];
    } else {
      y = y ^ A[i];
    }
  }
  for (let i = 1; i <= n + 2; i++) {
    if (((i >> b) & 1) == 1) {
      x = x ^ i;
    } else {
      y = y ^ i;
    }
  }
  let ans = [];
  ans[0] = x;
  ans[1] = y;
  ans.sort((a, b) => a - b);
  return ans;
}

res = missingNumber2(A);
console.log("dfde", res);
