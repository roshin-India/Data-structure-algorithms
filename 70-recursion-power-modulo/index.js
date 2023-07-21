function powmod(A, B, C) {
  A = BigInt(A);
  C = BigInt(C);
  if (A < BigInt(0)) {
    return Number(A + C);
  }
  if (B === 0) return BigInt(1) % C;
  let p = powmod(A % C, Math.floor(B / 2), C) % C;
  if (B % 2 == 0) {
    return (p * p) % C;
  } else {
    return (((p * p) % C) * A) % C;
  }
}
// pow : function(A, B, C){
//       A = BigInt(A);
//       C = BigInt(C)
//       let ans = this.power(A,B,C);
//       if(ans < BigInt(0)) ans= (ans+C)%C;
//       return Number(ans)
//   },

// function powmod(A, B, C) {
//   if (A === 0) {
//     return 0;
//   }
//   if (B === 0) {
//     return 1;
//   }
//   let p = powmod(A, B / 2, C);
//   let result = (p * p) % C;
//   if (B % 2 === 0) {
//     return result;
//   } else {
//     if (A < 0) {
//       return ((result % C) * (A + C)) % C;
//     } else {
//       return (result * A) % C;
//     }
//   }
// }
// Test the function
console.log(powmod(-1, 1, 20));

// power:function(A,B,C){
//         if(B===0) return BigInt(1)%C;
//         let p = this.power(A%C,Math.floor(B/2),C)%C;
//         if(B%2){
//             return (((p*p)% C) * (A%C))%C
//         }
//         else{
//             return (p*p)% C
//         }
//     }
