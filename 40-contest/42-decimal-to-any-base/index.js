function baseToDec(A, B) {
  let newArr = A.toString().split("");
  let decimalVal = 0;
  let i = 0;
  let j = newArr.length - 1;
  while (j >= 0) {
    let val = newArr[j] * B ** i;
    decimalVal += val;
    i++;
    j--;
  }
  return decimalVal;
}

const res = baseToDec(1010, 2);
console.log(res);
