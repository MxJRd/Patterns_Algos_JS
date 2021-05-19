/*
MERGE
Create an empty array.
Look at the smallest values in each input array.
  While there are values that haven't been seen
    if the value in the first array is smaller than second, push that value into our empty array and move on to the next value in the array.
    if the value in the second array is smaller than first, push that value into our empty array and move on to the next value in the array.
*/
function merge(arr1, arr2) {
  let i = 0,
      j = 0,
      newArr = [];
  while(i < arr1.length && j < arr2.length) {
    console.log(arr1[i], arr2[j])
    if(arr1[i] < arr2[j]){
      newArr.push(arr1[i]);
      i += 1;
    }
    if(arr2[j] < arr1[i]){
      newArr.push(arr2[j]);
      j += 1;
    }
    if(!(arr1[i]) || !(arr2[j])) break;
  }
  while(arr2[j]) {
    newArr.push(arr2[j]);
    j += 1;
  }
  while(arr1[i]) {
    newArr.push(arr1[i]);
    i += 1;
  }
  return newArr;
}

function mergeSort(arr) {
  if(arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2),
      left = mergeSort(arr.slice(0, mid)),
      right = mergeSort(arr.slice(mid));
  return merge(left, right);
}

module.exports = {
  mergeSort,
}