/**
 * Sliding Window - minSubArrayLen
Write a function called minSubArrayLen which accepts two parameters - an array of positive integers and a positive integer.

This function should return the minimal length of a contiguous subarray of which the sum is greater than or
equal to the integer passed to the function. If there isn't one, return 0 instead.
Examples:

minSubArrayLen([2,3,1,2,4,3], 7) // 2 -> because [4,3] is the smallest subarray
minSubArrayLen([2,1,6,5,4], 9) // 2 -> because [5,4] is the smallest subarray
minSubArrayLen([3,1,7,11,2,9,8,21,62,33,19], 52) // 1 -> because [62] is greater than 52
minSubArrayLen([1,4,16,22,5,7,8,9,10],39) // 3
minSubArrayLen([1,4,16,22,5,7,8,9,10],55) // 5
minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11) // 2
minSubArrayLen([1,4,16,22,5,7,8,9,10],95) // 0
Time Complexity - O(n)
Space Complexity - O(1)
 * @param { Array } arr 
 * @param {*} sum 
 */
function minSubArrayLen(arr, sum) {
  let start = 0;
  let end = 0;
  let minLength = Infinity;
  let total = 0;
  while (start < arr.length) {
    // if total is less then sum then add into total.
    if (total < sum && end < arr.length) {
      total = total + arr[end];
      end++;
    } 
     // if total is greater then sum then minus Ith element from total.
    else if (total >= sum) {
      minLength = Math.min(minLength, end - start);
      total = total - arr[start];
      start++;
    } else {
      break;
    };
}
return minLength === Infinity ? 0 : minLength;
}

console.log(minSubArrayLen([2,3,1,2,4,3], 7)); // 2 -> because [4,3] is the smallest subarray
console.log(minSubArrayLen([2,1,6,5,4], 9)); // 2 -> because [5,4] is the smallest subarray
console.log(minSubArrayLen([3,1,7,11,2,9,8,21,62,33,19], 52)); // 1 -> because [62] is greater than 52
console.log(minSubArrayLen([1,4,16,22,5,7,8,9,10],39)); // 3
console.log(minSubArrayLen([1,4,16,22,5,7,8,9,10],55)); // 5
console.log(minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11)); // 2
console.log(minSubArrayLen([1,4,16,22,5,7,8,9,10],95)); // 0

/**
 * Explanation:minSubArrayLen([2,1,6,5,4], 9)
 * start = 0, end = 0, total = 0, minLength = Infinity.
 * 0 < 9 && 0 < 5 {
 *  total = 0 + 2;
 *   start ++;
 * 
 * 2 < 0 && 1 < 5
 *  total = 2 +1 ;
 * start++;
 *  
 * same way until total is equalt to or greather than sum.
 * [i = 0 and j = 3]
 * else if ( 9 >= 9) {
 *   minLen = Math.Min(Infinity, 3)
 *   minleng = 3;
 *   total = total - first element value(2)
 *   now latest total value is 7. 
 *   same way we do until we found shortest array that is [6,5].
 * }
 * }
 * }
 */

