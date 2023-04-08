// Multiple Pointers - averagePair
// Write a function called averagePair. Given a sorted array of integers and a target average, determine if there is a pair of values in the array where the average of the pair equals the target average. There may be more than one pair that matches the average target.

// Bonus Constraints:

// Time: O(N)
// Space: O(1)

// Sample Input:
// averagePair([1,2,3],2.5) // true
// averagePair([1,3,3,5,6,7,10,12,19],8) // true
// averagePair([-1,0,3,4,5,6], 4.1) // false
// averagePair([],4) // false
// JAY
function averagePair(arr,avg){
    if (arr.length === 0) return false;
    let i = 0;
    let j = arr.length - 1;
    while(i<arr.length) {
       let sumAVG = (arr[i] + arr[j]) / 2;
       if(sumAVG == avg) return true;
       else if (sumAVG > avg) j--;
       else if (sumAVG < avg) i++;
    }
    return false;
   }

// UDEMY
function averagePair(arr, num){
    let start = 0
    let end = arr.length-1;
    while(start < end){
      let avg = (arr[start]+arr[end]) / 2 
      if(avg === num) return true;
      else if(avg < num) start++
      else end--
    }
    return false;
  }