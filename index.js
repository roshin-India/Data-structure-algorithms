const size = 3;
let chunked = [];
const arr1 = [1, 2, 3, 4, 5];
function sum() {
  //for (let num of arr1) {
  //     console.log("num", num);
  //     sum += num;
  //   }
  // console.log(
  //   "sum",
  //   arr1.reduce((acc, val) => acc + val, 0)
  // );
}
// sum()
function chunk() {
  sum = 0;
  let index = 0;
  let chunked = [];
  // while (index < arr1.length) {
  //   chunked.push(arr1.slice(index, size + index));
  //   index += size;
  //   }
  // console.log("chunked", chunked);
  //   for (let num of arr) {
  //     let last = chunked[chunked.length - 1];
  //     if (!last || last.length == size) {
  //       chunked.push([num]);
  //     } else {
  //       last.push(num);
  //     }
  //   }
  //
  // return chunked;
}
// chunk();

const arr = [1, 2, 3, 4, 5, 6];
function findLargest(arr) {
  // let largest = 0;
  // for (let i = 0; i < arr.length; i++) {
  //   if (arr[i] > largest) {
  //     largest = arr[i];
  //   }
  // }
  //console.log("largest",largest)
  // return largest;
}
// findLargest(arr);

// Example usage
const arr2 = [1, 5, 2, 10, 15, 3];
function findSecondLargest(arr) {
  //   const sortedArr = arr.sort((a, b) => a - b);
  //   return sortedArr[sortedArr.length - 2];

  //OR
  let large = 0;
  let second = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > large) {
      second = large;
      large = arr[i];
    } else if (arr[i] > second && arr[i] !== large) {
      second = arr[i];
    }
  }
  // let large = 0;
  // let second = 0;
  // for (let i = 0; i < arr.length; i++) {
  //   if (arr[i] > large) {
  //     second = large;
  //     large = arr[i];
  //   } else if (arr[i] > second && arr[i] !== large) {
  //     second = arr[i];
  //   }
  // }
  return second;
}

// Example usage
const arr3 = [1, 2, 3, 4, 9, 5];
// console.log(";;;;", findSecondLargest(arr3));

function reverseArray(arr) {
  const reversedArr = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    reversedArr.push(arr[i]);
    console.log("lllll", i);
  }
  console.log("reversedArr", reversedArr);
}

// Example usage
const arr4 = [1, 2, 3, 4, 5];
// console.log(reverseArray(arr4));

function generatePyramid() {
  var totalNumberofRows = 5;
  var output = "";
  for (var i = 1; i <= totalNumberofRows; i++) {
    for (var j = 1; j <= i; j++) {
      output += j + "  ";
    }
    console.log(output);
    output = "";
  }
}

// generatePyramid();

function createPyramid(rows) {
  for (let i = 0; i < rows; i++) {
    var output = "";
    for (let j = 0; j < rows - i; j++) output += " ";
    for (let k = 0; k <= i; k++) output += "* ";
    console.log(output);
  }
}
function createPyramid2(rows) {
  var output = "";
  for (let i = 1; i <= rows; i++) {
    for (let j = 1; j <= rows - i; j++) {
      output += "-";
    }
    for (let k = 1; k <= i; k++) {
      output += "* ";
    }
    console.log(output);
    output = "";
  }
}
// createPyramid2(4);

function isPrime(num) {
  if (num < 2) {
    return false;
  }
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}
function bubbleSort(arr) {
  // Implement bubblesort
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        const less = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = less;
      }
    }
  }
  console.log("arr", arr);
  // return the sorted array
  return arr;
}
bubbleSort([-30, 23, 5464, 4, 56, 89, 90]);
