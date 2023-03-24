function rotateArray(arr, k) {
  if (arr.length === k || arr.length === 0) {
    return arr
  }
  i = 0
  while (i < k) {
    arrPop = arr.pop()
    arr.unshift(arrPop)
    i++
  }

  return arr

}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: [4, 1, 2, 3]");
  console.log("=>", rotateArray([1, 2, 3, 4], 1));

  console.log("");

  console.log("Expecting: [2, 3, 1]");
  console.log("=>", rotateArray([1, 2, 3], 2));

  console.log("");

  console.log("Expecting: [1, 2, 3]");
  console.log("=>", rotateArray([1, 2, 3], 3));
}

module.exports = rotateArray;

// Please add your pseudocode to this file
// And a written explanation of your solution
