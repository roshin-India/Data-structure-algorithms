function generateParenthesis(A) {
  const result = [];
  function generate(current, open, close) {
    if (current.length === 2 * A) {
      result.push(current);
      return;
    }

    if (open < A) {
      generate(current + "(", open + 1, close);
    }

    if (close < open) {
      generate(current + ")", open, close + 1);
    }
  }
  generate("", 0, 0);
  return result;
}
res = generateParenthesis(2);
console.log("dfde", res);
