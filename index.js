/*
Write a function called countUniqueValues which accepts a sorted array, and counts the unique values in the array. There can be negative numbers in the array, but it will always be sorted. 
*/
/* Patterns */
const SlidingWindow = require('./SlidingWindow');
const TwoPointer = require('./TwoPointer');
const FrequencyCounter = require('./FrequencyCounter');
/* Patterns */

const SearchingAlgos = require('./SearchingAlgos');
const SortingAlgos = require('./SortingAlgos');


/* Sliding Window */

// SlidingWindow.maxSubArraySum([2, 1, 5, 1, 3, 2], 3); //9
// SlidingWindow.maxSubArraySum([2, 3, 4, 1, 5], 2); //7

// SlidingWindow.minSubArrayGivenSum([2, 1, 5, 2, 3, 2], 7); // 2 => [5, 2]
// SlidingWindow.minSubArrayGivenSum([2, 1, 5, 2, 8], 7); // 1 => [8]
// SlidingWindow.minSubArrayGivenSum([3, 4, 1, 1, 6], 8); // 3 => [3, 4, 1]

// SlidingWindow.longestSubStringWithKDistinctCharacters("araaci", 2); //4 => "araa"
// SlidingWindow.longestSubStringWithKDistinctCharacters("araaci", 1); //2 => "aa"
// SlidingWindow.longestSubStringWithKDistinctCharacters("cbbebi", 3); //5 => "cbbeb" && "bbebi"

// SlidingWindow.fruitsIntoBaskets(['A', 'B', 'C', 'B', 'B', 'C']); // 5 => ['B', 'C', 'B', 'B', 'C']
/* Sliding Window */


/* Two Pointer */
//Returns index;
// TwoPointer.pairWithTargetSum([1, 2, 3, 4, 6], 6); // [1, 3] => 2 + 4 = 6;
// TwoPointer.pairWithTargetSum([2, 5, 9, 11], 11); // [0, 2] => 2 + 9 = 11;


// console.log("Test")
// TwoPointer.removeDuplicates([2, 3, 3, 3, 6, 9, 9]);
// TwoPointer.makeSquares([-2, -1, 0, 2, 3]);
/* Two Pointer */


/* Frequency Counter */
// FrequencyCounter.sameFrequency(182, 281) // true
// FrequencyCounter.sameFrequency(34, 14) // false
// FrequencyCounter.sameFrequency(3589578, 5879385) //true
// FrequencyCounter.sameFrequency(22, 222) // false
/* Frequency Counter */

/* Searching Algos */
// SearchingAlgos.linearSearch([10, 15, 25, 30, 40], 15); // 1
SearchingAlgos.binarySearch([1, 3, 4, 5, 7, 10, 11, 15, 17], 15); //7
/* Searching Algos */


/* SortingAlgos */
// SortingAlgos.mergeSort([0, 2, 3, 1, 4, 6]);
/* SortingAlgos */

const countUniqueValues = (arr) => {
  if(!arr || arr.length === 0) return 0;
  let i = 0;
  for(let j = 1; j < arr.length; j += 1) {
    if(arr[i] !== arr[j]) {
      i += 1;
      arr[i] = arr[j];
    }
  }
  return i + 1;
}

// console.log(countUniqueValues([1, 1, 1, 1, 1, 2])); // 2
// countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]);// 7
// countUniqueValues([]); // 0
// countUniqueValues([-2, -1, -1, 0, 1]); // 4






// function areThereDuplicates(...args) {
//   let i = 0,
//       j = 1;
//   args.sort((a, b) => a > b);
//   while(j < args.length) {
//     if(args[i] === args[j]) return true;
//     i += 1;
//     j += 1;
//   }
//   return false;
// }

// console.log(areThereDuplicates("a", "b", "c", "a"));


function fibonacci(n, memo) {
  memo = memo || {};

  if(memo[n]) return memo[n];
  if(n <= 0) return 1;

  console.log(memo[n]);
  return memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo);
}

// fibonacci(7);

function fizzBuzz(n) {
  //do it recursively for fun. 
}
// nums = [-10,-3,0,5,9]

function longestSubstring(str) { //inputs are a single string.
  
  //declare a size variable.
  //declare a start variable to represent where the window begins.
  //create a hash table to represent items already seen.
  let size = 0,
      start = 0,
      memo = {};
  //loop through the string where the iterator represents the end of the window.
  for(let end = 0; end < str.length; end += 1) {
    //declare a new variable char, to represent chars in the string.
    const char = str[end]; //will represent character 0;
    if(memo[char]) {
      //when a char has been seen twice set start to the larger of either memo[char] or the start value.
      start = Math.max(start, memo[char]); // 1 | 4
    }
    size = Math.max(size, end - start + 1);
    memo[char] = end + 1; //a === 1 && a === 4
  }
  //returns an integer representing the maxWindowSize
  return size;
}

// longestSubstring("abcabcbb");