/* Linear Search */ 
//O(n)
/* Accepts an array and a value. Returns the index if exists, returns -1 if it doesn't */
function linearSearch(arr, val) {
  let idx = 0;
  for(let elem of arr) {
    if(elem === val) return idx;
    idx += 1;
  }
  return -1;
}
/* Binary Search */
//O(log n)
function binarySearch(arr, val) {
  let left = 0,
      right = arr.length - 1;
      mid = Math.floor((left + right) / 2);
  if(arr[left] > val || arr[right] < val) return -1;
  while(left < right) {
    if(val > arr[mid]) {
      left = mid + 1;
      mid = Math.floor((left + right) / 2);
    }
    if(val < arr[mid]) {
      right = mid - 1;
      mid = Math.floor((left + right) / 2);
    }
    if(val === arr[mid]) return mid;
  }
  return - 1;
}

module.exports = {
  linearSearch,
  binarySearch
}