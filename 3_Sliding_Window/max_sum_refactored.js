function maxSubarraySum(arr, num){
  let maxSum = 0;
  let tempSum = 0;
  if (arr.length < num) return null;
  // First we store first 3 consecutive numbers sum in variable.
  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;
  // MOST IMPROTANT WE NEED TO STORE LATEST 3 NUMBERS SUM.
  // THAT WHY WE CREATED tempSum VARIABLE GLOBALLY AND NOT INSIDE THE FOR LOOP.
  // for ex:[2,6,9,3,1,8,5,6,3] -> i=3
  for (let i = num; i < arr.length; i++) {
    //  tempSum = 17 - 2 + 3 => 18
    tempSum = tempSum - arr[i - num] + arr[i];
    // maxSum = 18
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}


maxSubarraySum([2,6,9,3,1,8,5,6,3],3)