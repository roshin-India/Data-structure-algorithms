function factorial(A) {
  if (A <= 1) {
    return 1;
  }

  return A * factorial(A - 1);
}

// Test the function
console.log(factorial(4)); // Output: 120
