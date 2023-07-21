function increase(N) {
  if (N === 1) {
    return "1";
  }

  return increase(N - 1) + " " + N;
}

console.log(increase(10), "\n");

function dec(A) {
  if (A === 1) {
    return "1";
  }

  return A + " " + dec(A - 1);
}
console.log(dec(10), "\n");
