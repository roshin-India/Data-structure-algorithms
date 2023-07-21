function fibonacci(A) {
  if (A <= 1) {
    return A;
  }

  return fibonacci(A - 1) + fibonacci(A - 2);
}

// Test the function
console.log(fibonacci(4)); // Output: 120
