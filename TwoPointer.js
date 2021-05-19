//Multi Pointer Pattern

const countUniqueValues = (arr) => {
  let rearCounter = arr.length - 1;
  let centerElem = Math.floor((arr.length / 2));
  // console.log(centerElem)
  const myMemo = {};
  for(let i = 0; i < arr.length && i < centerElem; i += 1) {
    const frontElem = arr[i];
    const rearElem = arr[rearCounter];
    console.log(rearElem)
    if(!myMemo[frontElem]) {
      myMemo[frontElem] = frontElem;
    }
    if (!myMemo[rearElem] && rearCounter >= centerElem) {
      myMemo[rearElem] = rearElem;
    }
    rearCounter -= 1;
  }
  console.log(myMemo)
  Object.keys(myMemo).length;
  return Object.keys(myMemo).length;
}
/*
Given an array of sorted numbers and a target sum, find a pair in the array whose sum is equal to the given target.
*/

function pairWithTargetSum(arr, target) {
  let left = 0,
      right = arr.length - 1;
  while(left < right) {
    const sum = arr[left] + arr[right];
    if(sum > target) right -= 1;
    if(sum < target) left += 1;
    if(sum === target) return [left, right];
  }
  return [-1, -1];
}

/*
Given an array of sorted numbers, remove all duplicates from it. You should not use any extra space; after removing the duplicates in-place return the length of the subarray that has no duplicate in it.
*/
function removeDuplicates(arr) {
  let i = 1,
      j = 0;
  while(i < arr.length) {
    if(arr[j] !== arr[i]) {
      arr[j] = arr[i];
      j += 1
    }
    i += 1;
  }
  return j;
}

function makeSquares(arr) {
  let left = 0,
      right = arr.length - 1,
      largestIdx = arr.length - 1
      squares = [];
  while(left <= right) {
    let leftSquare = arr[left] * arr[left],
        rightSquare = arr[right] * arr[right];
    if(leftSquare > rightSquare) {
      squares[largestIdx] = leftSquare;
      left += 1;
    } else {
      squares[largestIdx] = rightSquare;
      right -= 1;
    }
    largestIdx -= 1;
  }
  return squares;
}

function tripletSumToZero(arr) {
  let triplets = [];


  return triplets;
}


module.exports = {
  countUniqueValues,
  pairWithTargetSum,
  removeDuplicates,
  makeSquares,
  tripletSumToZero
}