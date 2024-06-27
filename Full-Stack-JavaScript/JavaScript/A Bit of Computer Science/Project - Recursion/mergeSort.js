//2024 Amal Kariyawasam, Merge Sort Algorithm

// Build a function mergeSort that takes in an array and returns a sorted array, using a recursive merge sort methodology.
// An input of [3, 2, 1, 13, 8, 5, 0, 1] should return [0, 1, 1, 2, 3, 5, 8, 13], and an input of [105, 79, 100, 110] should return [79, 100, 105, 110].
// Tips:

// Think about what the base case is and what behavior is happening again and again and can actually be delegated to someone else (e.g. that same function!).
// It may be helpful to check out the background videos again if you don’t quite understand what should be going on.

/* Pseudo Code
* Divide the given array into left half and right half
* Sort the left half of the array 
* Sort the right half of the array
* Merge the left half and right half  
Get the input array length

*/

function mergeSort(sortThisArray) {
  console.log("Merge Sort Algorithm");
  const leftArray = [];
  const rightArray = [];
  const sortedArray = [];
  let leftRightArraySize = sortThisArray.length / 2;

  for (let i = 0; i < leftRightArraySize; i++) {
    leftArray.push(sortThisArray[i]);
  }
  console.log(leftArray);

  for (let i = leftRightArraySize; i < sortThisArray.length; i++) {
    rightArray.push(sortThisArray[i]);
  }
  console.log(rightArray);

  // console.log(sortThisArray.length);
  // console.log(sortedArray.length);

  if (sortThisArray.length === sortedArray.length) {
    return sortedArray;
  }

  for (let i = 0; i < sortThisArray.length; i++) {
    if (leftArray[i] < rightArray[i]) {
      sortedArray.push(leftArray[i]);
    } else if (rightArray[i] < leftArray[i]) {
      sortedArray.push(rightArray[i]);
    }
  }
  console.log(sortedArray);

  return mergeSort(sortedArray);
}

const test1 = [3, 2, 1, 13, 8, 5, 0, 1];
const test2 = [105, 79, 100, 110];

mergeSort(test1); //should return [0, 1, 1, 2, 3, 5, 8, 13]
// mergeSort(test2); //should return [79, 100, 105, 110]

// console.log(test1.length);
