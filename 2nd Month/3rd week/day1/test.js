function bubbleSort(arr) {
  let len = arr.length-1;
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len - i; j++) {
      // Swap if the current element is greater than the next
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

const nums = [5, 3, 8, 1, 2];
console.log("Sorted:", bubbleSort(nums));  // [1, 2, 3, 5, 8]


function printTriangle(n) {
  for (let i = 1; i <= n; i++) {
    let row = '';
    for (let j = 1; j <= i; j++) {
      row += '*';
    }
    console.log(row);
  }
}

printTriangle(5);


function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i; // Return the index if found
    }
  }
  return -1; // Not found
}

// Example usage:
const numbers = [10, 25, 30, 5, 70];
const target = 30;

const result = linearSearch(numbers, target);
console.log(`element found at index: ${result}`); // Output: element found at index: 2

if (result !== -1) {
  console.log(`Element found at index ${result}`);
} else {
  console.log("Element not found");
}


a = [6, 9, 3, 4, 2]




