/**
 * 
 * @param {Array} arr 
 * @param {number} num 
 */
function binarySearch(arr, num) {
  let start = 0;
  let end = arr.length - 1;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if(arr[mid] === num) return mid;
    // Added mid - 1/ + 1 bcz we have already match arr[mid] with search number and it's not matched.
    // So, There is no point of setting start and end value as arr[mid].
    if (arr[mid] > num) end = mid - 1; 
    else if (arr[mid] < num) start = mid + 1;
  }
  return -1;
}

console.log(binarySearch([1,2,3,4,5],1)); // 0
console.log(binarySearch([1,2,3,4,5],3)) // 2
console.log(binarySearch([1,2,3,4,5],5)) // 4
console.log(binarySearch([1,2,3,4,5],6)) // -1
console.log(binarySearch([1,2,3,5],4)) // -1
console.log(binarySearch([ 5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98, 99], 10)) // 2
console.log(binarySearch([ 5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98, 99], 95)) // 16
console.log(binarySearch([5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98, 99], 100)) // -1