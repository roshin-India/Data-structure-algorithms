const A = [1, 2, 3, 4, 5];
function productArray(A) {
  let N = A.length;
  let product = [];
  for (let i = 0; i < N; i++) {
    let prod = 1;
    for (let j = 0; j < N; j++) {
      if (i != j) {
        prod = prod * A[j];
      }
    }
    product.push(prod);
  }
  return product;
}
const res = productArray(A);
console.log(res);
