//Write a function called maxSubArraySum which accepts an array of numbers and a number called n. The function should calculate the max sum of n consectuive elements in the array. 

// function maxSubArraySum(arr, n) {
//   //Create a current sum variable, and a max sum variable. Reassign when max > curr.
//   //n represents size of window.
//   //loop through the array, when the size is reached, cut first idx of the array.
//   let currentSum = 0,
//       maxSum = -Infinity,
//       windowStart = 0;
//   for(let i = 0; i < arr.length; i += 1) {
//     currentSum += arr[i];
//     if(i >= n) {
//       currentSum -= arr[windowStart];
//       maxSum = Math.max(maxSum, currentSum);
//       windowStart += 1;
//     }
//   }
//   return maxSum;
// }

function maxSubArraySum(arr, n) {
  let max = -Infinity,
      currentSum = 0,
      windowStart = 0;
  for(let i = 0; i < arr.length; i += 1) {
    currentSum += arr[i];
    // console.log(currentSum)
    if(i >= n) {
      currentSum -= arr[windowStart];
      max = Math.max(currentSum, max);
      windowStart += 1;
    }
  }
  return max;
}

function minSubArrayGivenSum(arr, s) {
  let windowStart = 0,
      currentSum = 0,
      windowSize = Infinity;
  for(let i = 0; i < arr.length; i += 1) {
    let element = arr[i];
    currentSum += element;
    // console.log(windowSize)
    while(currentSum >= s) {
      let firstElem = arr[windowStart];
      windowSize = Math.min(windowSize, i - windowStart + 1);
      currentSum -= firstElem;
      windowStart += 1;
    }
  }
  return windowSize;
}

function longestSubStringWithKDistinctCharacters(str, k) {
  let start = 0,
      max = 0,
      memo = {};
  for(let end = 0; end < str.length; end += 1) {
    const char = str[end];
    //if the character is not in the memo, add it to the memo, and initialize it to 0;
    if(!(char in memo)) {
      memo[char] = 0;
    }
    //tick the character up by 1.
    memo[char] += 1;
    while(Object.keys(memo).length > k) {
      memo[char] -= 1;
      if(memo[char] <= 0) {
        delete memo[char];
      }
      start += 1;
    }
    max = Math.max(max, end - start + 1);
  }
  return max;
}

function fruitsIntoBaskets(arr) {
  let start = 0,
      max = 0,
      memo = {};
  for(let end = 0; end < arr.length; end += 1) {
    const rightFruit = arr[end];
    if(!(rightFruit in memo)) {
      memo[rightFruit] = 0;
    }
    memo[rightFruit] += 1;
    while(Object.keys(memo).length > 2) {
      const leftFruit = arr[start];
      memo[leftFruit] -= 1;
      if(memo[leftFruit] <= 0) delete memo[leftFruit];
      start += 1;
    }
    max = Math.max(max, end - start + 1);
  }
  return max;
}

module.exports = {
  maxSubArraySum,
  minSubArrayGivenSum,
  longestSubStringWithKDistinctCharacters,
  fruitsIntoBaskets
}