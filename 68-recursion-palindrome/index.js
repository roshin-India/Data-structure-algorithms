const A = "abcdba";
function palindrome(A, s, e) {
  if (s > e) {
    return true;
  }
  if (A[s] == A[e] && palindrome(A, s + 1, e - 1)) {
    return "1";
  }
  return "0";
}

// Test the function
console.log(palindrome(A, 0, 3));
